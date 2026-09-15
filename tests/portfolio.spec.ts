import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { profile } from '../src/content/profile'
import { publishedProjects } from '../src/content/projects'

const paths = ['/', '/work', '/work/lm-group', '/work/iwiqovpn', '/work/posters', '/work/lettering', '/info', '/contact']

for (const path of paths) {
  test(`${path} is readable, accessible and free of runtime errors`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    const response = await page.goto(path)
    expect(response?.status()).toBe(200)
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.getByRole('main')).toHaveCount(1)
    await expect(page).toHaveTitle(/IWIoke/)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
    await expect(page.locator('.site-header a[href="/contact"]:visible').first()).toBeVisible()
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
    expect(results.violations).toEqual([])
    expect(errors).toEqual([])
  })
}

test('work filters are shareable, navigable and never publish the draft', async ({ page }) => {
  await page.goto('/work')
  const filters = page.getByRole('navigation', { name: 'Filter work by discipline' })
  await filters.getByRole('link', { name: 'Branding 01', exact: true }).click()
  await expect(page).toHaveURL(/category=branding/)
  await expect(page.locator('.index-entry')).toHaveCount(1)
  await expect(page.locator('.index-entry h2')).toHaveText('LM Group')
  await page.reload()
  await expect(filters.getByRole('link', { name: 'Branding 01', exact: true })).toHaveAttribute('aria-current', 'page')
  await filters.getByRole('link', { name: 'Experimental 02', exact: true }).click()
  await expect(page.locator('.index-entry')).toHaveCount(2)
  await expect(page.locator('.index-entry h2')).toHaveText(['Posters', 'Type / Lettering'])
  await page.goBack()
  await expect(page.locator('.index-entry')).toHaveCount(1)
  await page.goto('/work?category=not-real')
  await expect(page.locator('.index-entry')).toHaveCount(publishedProjects.length)
  await expect(page.locator('main')).not.toContainText('Future project')
})

test('desktop previews respond to focus without changing the stage height', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Touch layouts show previews directly in each entry.')
  await page.goto('/work')
  const preview = page.locator('.index-preview-image')
  const before = await preview.boundingBox()
  await page.locator('.index-entry[href="/work/posters"]').focus()
  await expect(page.locator('.index-preview-link')).toContainText('Posters')
  await expect(page.locator('.index-preview-image [data-asset="posters-cover"]')).toBeVisible()
  const after = await preview.boundingBox()
  expect(Math.abs(after!.height - before!.height)).toBeLessThan(2)
  const frame = await preview.locator('.media-frame').boundingBox()
  expect(frame!.height).toBeLessThanOrEqual(after!.height)
  expect(frame!.width / frame!.height).toBeCloseTo(4 / 5, 2)
  await page.locator('.index-entry[href="/work/lettering"]').hover()
  await expect(page.locator('.index-preview-link')).toContainText('Type / Lettering')
})

test('mobile navigation is a keyboard-accessible modal', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'The desktop navigation is directly visible.')
  await page.goto('/')
  const trigger = page.getByRole('button', { name: 'Menu', exact: true })
  await trigger.click()
  const dialog = page.getByRole('dialog', { name: /The index/ })
  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole('button', { name: 'Close', exact: true })).toBeFocused()
  for (let i = 0; i < 7; i++) {
    await page.keyboard.press('Tab')
    expect(await page.evaluate(() => document.querySelector('#mobile-navigation')?.contains(document.activeElement))).toBe(true)
  }
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
  expect(results.violations).toEqual([])
  await page.keyboard.press('Escape')
  await expect(dialog).not.toBeVisible()
  await expect(trigger).toBeFocused()
  await trigger.click()
  await dialog.getByRole('link', { name: '02 Info', exact: true }).click()
  await expect(page).toHaveURL(/\/info$/)
  await expect(dialog).not.toBeVisible()
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden')
})

test('poster slots open fullscreen, trap focus and return focus on Escape', async ({ page }) => {
  await page.goto('/work/posters')
  const trigger = page.getByRole('button', { name: 'Inspect Full composition asset slot', exact: true })
  await trigger.click()
  const dialog = page.getByRole('dialog', { name: 'Full composition', exact: true })
  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole('button', { name: 'Close', exact: true })).toBeFocused()
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden')
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
  expect(results.violations).toEqual([])
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Tab')
    expect(await page.evaluate(() => document.querySelector('#fullscreen-media')?.contains(document.activeElement))).toBe(true)
  }
  await page.keyboard.press('ArrowRight')
  await expect(page.locator('#media-viewer-title')).toHaveText('A closer look')
  await page.getByRole('button', { name: 'Previous media', exact: true }).click()
  await expect(page.locator('#media-viewer-title')).toHaveText('Full composition')
  await page.keyboard.press('Escape')
  await expect(page.locator('#fullscreen-media')).not.toBeVisible()
  await expect(trigger).toBeFocused()
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden')
})

test('lettering has its own fullscreen archive and honest dates', async ({ page }) => {
  await page.goto('/work/lettering')
  await expect(page.locator('.piece-caption').first()).toContainText('No date')
  await expect(page.locator('.archive-header')).toContainText('Portfolio edition / 2026')
  await page.getByRole('button', { name: 'Inspect Lettering composition asset slot', exact: true }).click()
  await expect(page.getByRole('dialog', { name: 'Lettering composition', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Next media', exact: true }).click()
  await expect(page.locator('#media-viewer-title')).toHaveText('Individual letterform')
  await page.getByRole('button', { name: 'Close', exact: true }).click()
  await expect(page.locator('#fullscreen-media')).not.toBeVisible()
})

test('LM Group retains its seven chapters and real source assets', async ({ page }) => {
  await page.goto('/work/lm-group')
  await expect(page.getByRole('navigation', { name: 'Project chapters' }).getByRole('link')).toHaveCount(7)
  for (const image of await page.locator('.case-study img').all()) {
    await image.scrollIntoViewIfNeeded()
    await expect.poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0)
    await expect(image).not.toHaveAttribute('alt', '')
  }
  const track = page.getByRole('region', { name: 'Project details', exact: true })
  await track.scrollIntoViewIfNeeded()
  const forward = page.getByRole('button', { name: 'Scroll Project details forwards', exact: true })
  await expect(forward).toBeEnabled()
  await forward.click()
  await expect.poll(() => track.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0)
  await expect(page.getByRole('button', { name: 'Scroll Project details backwards', exact: true })).toBeEnabled()
  await page.locator('.contact-cta .cta-composition').click()
  await expect(page).toHaveURL(/\/contact\?project=lm-group$/)
  await expect(page.locator('.email-address')).toHaveAttribute('href', `mailto:${profile.email}?subject=${encodeURIComponent('Project enquiry — LM Group')}`)
})

test('failed media keeps the designed frame instead of showing a broken image', async ({ page }) => {
  await page.route('**/media/lm-group/logo.svg', (route) => route.fulfill({ status: 404, body: '' }))
  await page.goto('/work/lm-group')
  const placeholder = page.locator('.project-hero .media-placeholder')
  await expect(placeholder).toBeVisible()
  await expect(placeholder).toContainText('The original asset could not load')
  await expect(page.locator('.project-hero img')).toHaveCount(0)
})

test('contact uses real email and reports a successful clipboard action honestly', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async (value: string) => { (window as typeof window & { copiedEmail?: string }).copiedEmail = value } } })
  })
  await page.goto('/contact')
  await expect(page.locator('.email-address')).toContainText(profile.email!)
  await expect(page.locator('form')).toHaveCount(0)
  await page.getByRole('button', { name: 'Copy email', exact: true }).click()
  await expect(page.getByRole('status')).toHaveText('Email address copied.')
  expect(await page.evaluate(() => (window as typeof window & { copiedEmail?: string }).copiedEmail)).toBe(profile.email)
  await expect(page.locator('.contact-channel-list a')).toHaveCount(profile.channels.length)
})

test('clipboard failure preserves a working email fallback', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('Clipboard denied in test') } } })
  })
  await page.goto('/contact')
  await page.getByRole('button', { name: 'Copy email', exact: true }).click()
  await expect(page.getByRole('status')).toContainText('Copy is unavailable.')
  await expect(page.locator('.email-address')).toHaveAttribute('href', `mailto:${profile.email}?subject=Project%20enquiry`)
})

test('reduced motion keeps content and interactions usable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  expect(await page.locator('html').evaluate((element) => getComputedStyle(element).scrollBehavior)).toBe('auto')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await page.goto('/work/posters')
  await page.getByRole('button', { name: 'Inspect Full composition asset slot', exact: true }).click()
  await expect(page.getByRole('dialog', { name: 'Full composition', exact: true })).toBeVisible()
  await page.keyboard.press('Escape')
})

test('narrow phones and tablets have no document-level horizontal scrolling', async ({ page }) => {
  for (const width of [320, 768]) {
    await page.setViewportSize({ width, height: 900 })
    for (const path of ['/', '/work', '/work/lm-group', '/work/lettering', '/info', '/contact']) {
      await page.goto(path)
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${path} at ${width}px`).toBe(true)
    }
  }
})

test('unknown and draft project URLs really return 404', async ({ page }) => {
  for (const path of ['/not-a-page', '/work/future-project', '/work/unknown']) {
    const response = await page.goto(path)
    expect(response?.status()).toBe(404)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Not in')
    await expect(page.getByRole('link', { name: 'Back to the work' })).toBeVisible()
  }
})

test('SEO is deployment-aware and the social image is a real generated asset', async ({ page, request }) => {
  await page.goto('/work/lm-group')
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /freight and logistics/)
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'LM Group — IWIoke')
  const configured = Boolean(process.env.SITE_URL?.trim())
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(configured ? 1 : 0)
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', configured ? /^index/ : /noindex/)
  const robots = await request.get('/robots.txt')
  expect(await robots.text()).toContain(configured ? 'Sitemap:' : 'Disallow: /')
  const sitemap = await request.get('/sitemap.xml')
  expect((await sitemap.text()).includes('/work/lm-group')).toBe(configured)
  const social = await request.get('/social-image')
  expect(social.status()).toBe(200)
  expect(social.headers()['content-type']).toContain('image/png')
  const response = await request.get('/')
  expect(response.headers()['x-content-type-options']).toBe('nosniff')
  expect(response.headers()['x-frame-options']).toBe('DENY')
})

test('the portfolio and contact remain readable without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  await page.goto(`${baseURL}/`)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.getByRole('link', { name: 'LM Group', exact: true })).toBeVisible()
  await page.goto(`${baseURL}/contact`)
  await expect(page.locator('.email-address')).toHaveAttribute('href', `mailto:${profile.email}?subject=Project%20enquiry`)
  await context.close()
})
