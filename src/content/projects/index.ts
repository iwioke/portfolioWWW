import { categoryLabels } from '../profile'
import type { Project } from '../types'
import { lmGroup } from './lm-group'
import { iwiqoVPN } from './iwiqovpn'
import { posters } from './posters'
import { lettering } from './lettering'
import { projectTemplate } from './template'

export const projects: Project[] = [lmGroup, iwiqoVPN, posters, lettering, projectTemplate]
export const publishedProjects = projects.filter((project) => project.status === 'published')

export function getProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug)
}

export function getProjectAssets(project: Project) {
  const assets = [project.hero, ...(project.preview ? [project.preview] : []), ...project.chapters.flatMap((chapter) => chapter.blocks.flatMap((block) => block.assets)), ...project.archive.map((piece) => piece.asset)]
  return [...new Map(assets.map((asset) => [asset.id, asset])).values()]
}

export function getCategories(catalogue = publishedProjects) {
  const used = new Set(catalogue.filter((project) => project.status === 'published').flatMap((project) => project.categories))
  const ordered = [...Object.keys(categoryLabels).filter((id) => used.has(id)), ...[...used].filter((id) => !(id in categoryLabels))]
  return [{ id: 'all', label: 'All' }, ...ordered.map((id) => ({ id, label: categoryLabels[id] ?? id.replaceAll('-', ' ') }))]
}

export function normalizeCategory(value: string | string[] | undefined) {
  return typeof value === 'string' && getCategories().some((category) => category.id === value) ? value : 'all'
}

export function filterProjects(category: string, catalogue = publishedProjects) {
  return catalogue.filter((project) => project.status === 'published' && (category === 'all' || project.categories.includes(category)))
}

export function projectDate(project: Project) {
  return project.year === null ? 'Selected work' : String(project.year)
}

export function projectNumber(project: Project) {
  return String(publishedProjects.indexOf(project) + 1).padStart(2, '0')
}
