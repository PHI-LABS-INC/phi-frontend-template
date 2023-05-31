import { ReactNode } from 'react'
import { Account } from '../components/Account'
import { Connect } from '../components/Connect'
import { Connected } from '../components/Connected'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import { Providers } from './providers'

export const metadata = {
  title: 'wagmi',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <h1>wagmi + Next.js + @wagmi/cli (ABI)</h1>
          <Connect />
          <Connected>
            <Account />
            <NetworkSwitcher />
            </Connected>
          <hr />
          {children}
        </Providers>
      </body>
    </html>
  )
}
