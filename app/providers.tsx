'use client'

import { ReactNode, useState, useEffect } from 'react'
import { WagmiConfig } from 'wagmi'
import { config } from '../lib/wagmi'

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return <WagmiConfig config={config}>{mounted && children}</WagmiConfig>
}
