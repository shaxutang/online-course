import { ViteSSG, ViteSSGContext } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import './style.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import '../Mock'

export const createApp = ViteSSG(
  App,
  { routes: setupLayouts(generatedRoutes) },
  (context: ViteSSGContext) => {
    Object.values(
      import.meta.glob<{ install: UseModule }>('./modules/*.ts', {
        eager: true
      })
    ).map((module) => module.install(context))
  }
)
