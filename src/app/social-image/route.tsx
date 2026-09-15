import { ImageResponse } from 'next/og'
import { profile } from '@/content/profile'

export const dynamic = 'force-static'

export function GET() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', background: '#f4f4f0', color: '#171717', padding: '44px 54px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22 }}><span style={{ fontWeight: 700 }}>IWIoke</span><span>PORTFOLIO / {profile.edition}</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 132, lineHeight: 0.96, fontWeight: 700, letterSpacing: '-8px' }}><span>GRAPHIC</span><span>+ DIGITAL</span></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #a0a09a', paddingTop: 20, fontSize: 20 }}><span>Maxim Matsulevich</span><span>Identity / Interfaces / Posters / Type</span></div>
    </div>,
    { width: 1200, height: 630 },
  )
}
