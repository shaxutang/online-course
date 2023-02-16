export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $clsx: typeof import('clsx').default
    $moment: typeof import('moment')
    $message: typeof import('../components/Message/type')['Message']
  }
}
