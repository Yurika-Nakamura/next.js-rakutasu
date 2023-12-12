  import {
    FiSettings,
  } from 'react-icons/fi'
  import { BsCalendar3 } from "react-icons/bs";
  import { TfiHome, TfiAgenda, TfiPencilAlt } from "react-icons/tfi";
  import { IconType } from 'react-icons'

interface LinkItemProps {
    name: string
    icon: IconType
    href?: string
  }

const LinkItems: Array<LinkItemProps> = [
    { name: 'ホーム', icon: TfiHome, href: '/home' },
    { name: 'プロジェクト', icon: TfiAgenda, href: '/projects' },
    { name: '日報', icon: TfiPencilAlt, href: '/home' },
    { name: 'カレンダー', icon: BsCalendar3, href: '/home' },
    { name: 'Settings', icon: FiSettings, href: '/home' },
]

export default LinkItems;