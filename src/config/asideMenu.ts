import {
  faHome,
  faGraduationCap,
  faPlus,
  faFire
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type AsideMenu = {
  path: string
  name: string
  icon: IconDefinition
}

const Menu: AsideMenu[] = [
  {
    path: '/',
    name: '推荐',
    icon: faFire
  },
  {
    path: '/courses',
    name: '已购课程',
    icon: faGraduationCap
  },
  {
    path: '/release',
    name: '发布',
    icon: faPlus
  }
]

export default Menu
