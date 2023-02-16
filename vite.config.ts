import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Unocss from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'
import code from '@yankeeinlondon/code-builder'
import meta from '@yankeeinlondon/meta-builder'
import link from '@yankeeinlondon/link-builder'
import generateSitemap from 'vite-ssg-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    ,
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        {
          lodash: [['default', 'Lodash']]
        }
      ],
      dirs: ['src/composables'],
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView']
        }
      ],
      dirs: ['src/components'],
      dts: 'src/components.d.ts'
    }),
    Markdown({
      builders: [code(), meta(), link()]
    }),
    Pages({
      extensions: ['vue', 'md'],
      exclude: ['**/components/*.vue']
    }),
    Layouts(),
    Unocss(),
    Inspect()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },

  build: {
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       lodash: ['lodash']
    //     }
    //   }
    // }
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() {
      generateSitemap()
    }
  }
})
