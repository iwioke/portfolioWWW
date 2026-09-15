'use client'

import { Arrow } from '@/components/icons'

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="not-found shell"><span className="micro">This view couldn’t load</span><h1>Let’s try<br />that again.</h1><p>The page is temporarily unavailable. You can retry without leaving the site.</p><button className="text-control" onClick={reset}>Try again<Arrow direction="right" /></button></section>
}
