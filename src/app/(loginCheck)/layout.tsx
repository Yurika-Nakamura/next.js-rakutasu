'use client'
import CheckLoginStatus from '../../utils/checkLoginStatus'
import { HomeDataProvider } from '../../contexts/homeContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <CheckLoginStatus />
          <HomeDataProvider>
           {children}
          </HomeDataProvider>
    </>
  )
}
