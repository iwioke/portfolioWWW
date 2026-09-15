'use client'

import { useEffect, useRef, type KeyboardEventHandler, type ReactNode } from 'react'

export function Dialog({ id, open, onClose, titleId, descriptionId, className = '', onKeyDown, children }: {
  id: string
  open: boolean
  onClose: () => void
  titleId: string
  descriptionId?: string
  className?: string
  onKeyDown?: KeyboardEventHandler<HTMLDialogElement>
  children: ReactNode
}) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!open || !dialog) return
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    if (!dialog.open) dialog.showModal()
    document.body.style.overflow = 'hidden'
    dialog.querySelector<HTMLElement>('[data-modal-close]')?.focus()
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus({ preventScroll: true })
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    window.addEventListener('popstate', onClose)
    return () => window.removeEventListener('popstate', onClose)
  }, [open, onClose])

  const handleKeyDown: KeyboardEventHandler<HTMLDialogElement> = (event) => {
    onKeyDown?.(event)
    if (event.defaultPrevented || event.key !== 'Tab') return
    const controls = [...event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])')]
      .filter((element) => element.tabIndex >= 0 && element.getClientRects().length > 0)
    const first = controls[0]
    const last = controls.at(-1)
    if (!first || !last) { event.preventDefault(); return }
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <dialog ref={ref} id={id} className={`dialog ${className}`} aria-labelledby={titleId} aria-describedby={descriptionId}
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
      onKeyDown={handleKeyDown}>
      {children}
    </dialog>
  )
}
