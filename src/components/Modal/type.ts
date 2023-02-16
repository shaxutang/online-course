export type Modal = {
  confirm: (options: ConfirmModalOptions) => void
}

export type ConfirmModalOptions = {
  title?: string
  text: string
  ok?: () => void
  cancel?: () => void
}
