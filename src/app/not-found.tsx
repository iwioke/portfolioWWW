import Link from 'next/link'
import { Arrow } from '@/components/icons'

export default function NotFound() {
  return <section className="not-found shell"><span className="micro">404 / Outside the index</span><h1>Not in<br />the archive.</h1><p>This page doesn’t exist, or this project has not been published.</p><Link href="/work" className="text-link">Back to the work<Arrow direction="right" /></Link></section>
}
