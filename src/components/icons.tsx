export function Arrow({ direction = 'up-right', className = '' }: { direction?: 'up-right' | 'right' | 'down' | 'left'; className?: string }) {
  const paths = {
    'up-right': 'M5 19 19 5M5 5h14v14',
    right: 'M3 12h17m-7-7 7 7-7 7',
    down: 'M12 3v17m-7-7 7 7 7-7',
    left: 'M21 12H4m7-7-7 7 7 7',
  }
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d={paths[direction]} /></svg>
}

export function Plus({ className = '' }: { className?: string }) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M12 3v18M3 12h18" /></svg>
}

export function Close() {
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="m5 5 14 14M5 19 19 5" /></svg>
}

export function Expand() {
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M9 4H4v5m11-5h5v5M4 15v5h5m6 0h5v-5" /></svg>
}

export function Copy() {
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M8 8h12v12H8zM16 8V4H4v12h4" /></svg>
}
