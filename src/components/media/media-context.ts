'use client'

import { createContext, useContext } from 'react'

export const MediaContext = createContext<((id: string) => void) | null>(null)

export function useMedia() {
  const context = useContext(MediaContext)
  if (!context) throw new Error('Interactive media must be rendered inside a MediaProvider')
  return context
}
