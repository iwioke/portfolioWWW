'use client'

import { useEffect, useRef, useState } from 'react'
import { Copy } from './icons'

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])

  async function copy() {
    if (timer.current) clearTimeout(timer.current)
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(email)
      setState('copied')
    } catch {
      setState('error')
    }
    timer.current = setTimeout(() => setState('idle'), 6000)
  }

  return <div className="copy-email"><button className="text-control micro" onClick={copy}><Copy />{state === 'copied' ? 'Email copied' : 'Copy email'}</button><p role="status" className="copy-feedback">{state === 'copied' && 'Email address copied.'}{state === 'error' && 'Copy is unavailable. Select the address or use the email link.'}</p></div>
}
