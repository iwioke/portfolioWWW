import { afterEach, describe, expect, it, vi } from 'vitest'
import { pageMetadata, siteOrigin } from './seo'

afterEach(() => vi.unstubAllEnvs())

describe('deployment-aware SEO', () => {
  it('does not invent an origin before a domain is configured', () => {
    vi.stubEnv('SITE_URL', '')
    expect(siteOrigin()).toBeUndefined()
    expect(pageMetadata('Work', '/work').alternates).toBeUndefined()
    expect(pageMetadata('Work', '/work').robots).toEqual({ index: false, follow: false })
  })

  it('includes the identity in both the homepage and nested page titles', () => {
    expect(pageMetadata('Graphic + Digital', '/').title).toEqual({ absolute: 'Graphic + Digital — IWIoke' })
    expect(pageMetadata('LM Group', '/work/lm-group').title).toEqual({ absolute: 'LM Group — IWIoke' })
  })

  it('uses the configured origin for canonical and sharing URLs', () => {
    vi.stubEnv('SITE_URL', 'https://portfolio.example.test/')
    const metadata = pageMetadata('LM Group', '/work/lm-group')
    expect(metadata.alternates).toEqual({ canonical: 'https://portfolio.example.test/work/lm-group' })
    expect(metadata.robots).toEqual({ index: true, follow: true })
  })

  it('rejects malformed or unsafe production origins', () => {
    for (const value of ['not-a-url', 'javascript:alert(1)', 'https://user:password@example.test', 'https://example.test/subpath', 'https://example.test?query=1', 'http://example.test']) {
      expect(() => siteOrigin(value)).toThrow()
    }
    expect(siteOrigin('http://localhost:3000')).toBe('http://localhost:3000')
  })
})
