const configs = import.meta.glob('./*.ts', { eager: true })

import { Config } from './type'

export function useConfig(): Config {
  const config: Record<string, any> = {}
  Object.keys(configs).map((key) => {
    // 以文件名为属性名  asideMenu.ts => {asideMenu:[]}
    const name = key.replaceAll(/\.(\/|ts$)/g, '')
    config[name] = (configs[key] as any).default
  })
  return config as Config
}
