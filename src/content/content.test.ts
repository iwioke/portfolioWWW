import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { assetDate, mediaSlot } from './media'
import { profile } from './profile'
import { filterProjects, getCategories, getProject, getProjectAssets, normalizeCategory, projectDate, projects, publishedProjects } from './projects'
import { futureMediaSlots, projectTemplate } from './projects/template'
import { mediaKinds, type Project } from './types'

describe('an honest project catalogue', () => {
  it('publishes real project entries while keeping future work out of routes and filters', () => {
    expect(publishedProjects).toEqual(projects.filter((project) => project.status === 'published'))
    for (const slug of ['lm-group', 'iwiqovpn', 'posters', 'lettering']) expect(getProject(slug)).toBeDefined()
    expect(getProject(projectTemplate.slug)).toBeUndefined()
    expect(getProject('not-a-project')).toBeUndefined()
    for (const category of getCategories()) expect(filterProjects(category.id).every((project) => project.status === 'published')).toBe(true)
  })

  it('does not turn the portfolio edition into invented project or artwork dates', () => {
    expect(profile.edition).toBe(2026)
    expect(projectDate(projectTemplate)).toBe('Selected work')
    expect(assetDate(futureMediaSlots[0])).toBe('No date')
    for (const project of publishedProjects) if (project.year !== null) expect(project.yearEvidence).toBeTruthy()
  })

  it('presents the full multidisciplinary LM Group case study', () => {
    const project = getProject('lm-group')!
    expect(project.chapters.map((chapter) => chapter.id)).toEqual(['identity', 'digital', 'stationery', 'print', 'applications', 'details', 'final-system'])
    expect(project.disciplines).toContain('Visual identity')
    expect(project.disciplines).toContain('Print')
    expect(project.hero.media?.sourceLabel).toBe('Original repository asset')
  })

  it('only offers relevant results for each filter', () => {
    for (const category of getCategories().filter((item) => item.id !== 'all')) {
      expect(filterProjects(category.id).every((project) => project.categories.includes(category.id))).toBe(true)
    }
    expect(filterProjects('digital')).toContain(getProject('iwiqovpn'))
    expect(filterProjects('branding')).toContain(getProject('lm-group'))
  })

  it('normalizes invalid and repeated filter parameters', () => {
    expect(normalizeCategory(undefined)).toBe('all')
    expect(normalizeCategory(['web', 'digital'])).toBe('all')
    expect(normalizeCategory('unknown')).toBe('all')
    expect(normalizeCategory('lettering')).toBe('lettering')
  })

  it('accepts a future project and new category without changing page components', () => {
    const added: Project = { ...projectTemplate, slug: 'test-only-project', title: 'Test fixture', status: 'published', categories: ['editorial'] }
    const catalogue = [...publishedProjects, added]
    expect(getCategories(catalogue)).toContainEqual({ id: 'editorial', label: 'editorial' })
    expect(filterProjects('editorial', catalogue)).toEqual([added])
  })

  it('does not expose a draft-only category when given the complete catalogue', () => {
    const draft: Project = { ...projectTemplate, categories: ['unpublished-test'] }
    expect(getCategories([...publishedProjects, draft]).some((category) => category.id === 'unpublished-test')).toBe(false)
  })

  it('uses verified professional contact details', () => {
    expect(profile.email).toBe('iwiokework@gmail.com')
    expect(profile.sources).toContain('https://github.com/iwioke/iwioke')
    expect(profile.channels.every((channel) => channel.href.startsWith('https://'))).toBe(true)
  })
})

describe('media slots', () => {
  it('reserves every requested type of material with useful default proportions', () => {
    expect(futureMediaSlots.map((asset) => asset.kind)).toEqual(Object.keys(mediaKinds))
    expect(mediaSlot({ id: 'phone', project: 'Test', title: 'Mobile', kind: 'mobile' }).aspect).toEqual([9, 19.5])
    expect(mediaSlot({ id: 'poster', project: 'Test', title: 'Poster', kind: 'poster' }).aspect).toEqual([2, 3])
    expect(mediaSlot({ id: 'video', project: 'Test', title: 'Video', kind: 'video' }).aspect).toEqual([16, 9])
  })

  it('keeps geometry unchanged when an original image replaces a slot', () => {
    const slot = mediaSlot({ id: 'slot', project: 'Test', title: 'Identity', kind: 'identity', aspect: [3, 2] })
    const filled = { ...slot, media: { type: 'image', src: '/original.webp', alt: 'Original artwork', width: 1800, height: 1200 } }
    expect(filled.aspect).toBe(slot.aspect)
    expect(filled.id).toBe(slot.id)
    expect(slot.media).toBeNull()
  })

  it('keeps all source-backed images local, accessible and present', () => {
    for (const project of projects) {
      for (const asset of getProjectAssets(project)) {
        expect(asset.aspect.every((dimension) => Number.isFinite(dimension) && dimension > 0)).toBe(true)
        expect(asset.title.length).toBeGreaterThan(0)
        if (asset.media?.type === 'image') {
          expect(asset.media.alt.length).toBeGreaterThan(0)
          expect(asset.media.width).toBeGreaterThan(0)
          expect(asset.media.height).toBeGreaterThan(0)
          if (asset.media.src.startsWith('/')) expect(existsSync(resolve('public', asset.media.src.slice(1)))).toBe(true)
        }
      }
    }
  })

  it('uses stable identifiers and deduplicates reused media', () => {
    expect(new Set(projects.map((project) => project.slug)).size).toBe(projects.length)
    for (const project of projects) {
      expect(project.slug).toMatch(/^[a-z0-9-]+$/)
      const ids = getProjectAssets(project).map((asset) => asset.id)
      expect(new Set(ids).size).toBe(ids.length)
      expect(new Set(project.chapters.map((chapter) => chapter.id)).size).toBe(project.chapters.length)
    }
    expect(getProjectAssets(getProject('lm-group')!).filter((asset) => asset.id === 'lm-desktop')).toHaveLength(1)
  })
})
