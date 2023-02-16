import type { ViteSSGContext } from 'vite-ssg'
import type { AsideMenu } from '@/config/asideMenu'

export {}

declare global {
  type UseModule = (context: ViteSSGContext) => void
}
