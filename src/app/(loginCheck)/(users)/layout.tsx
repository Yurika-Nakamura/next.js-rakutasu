'use client'
import SidebarWithHeader from '../../../components/Header/MainHeader'
import useHomeData from './home/useHomeData'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    useHomeData();
  return (
      <>
        <SidebarWithHeader>
          {children}
        </SidebarWithHeader>
    </>
  )
}
