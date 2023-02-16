import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerDirectives,
  presetWebFonts
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      }
    })
  ],
  transformers: [transformerDirectives()],
  shortcuts: [
    ['flex-ji-center', 'flex justify-center items-center'],
    ['single-line-ellipsis', 'text-ellipsis overflow-hidden whitespace-nowrap'],
    ['ellipsis-line-2', 'text-ellipsis overflow-hidden line-clamp-2']
  ]
})
