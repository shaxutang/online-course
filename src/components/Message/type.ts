export type MessageProps = {
  id: any
  text: string
  type?: 'success' | 'danger' | 'warn' | 'info'
}

export type Control = {
  add: (message: MessageProps) => void
  remove: (id: any) => void
}

export type Message = {
  message: (text: string) => Promise<any>
  success: (text: string) => Promise<any>
  danger: (text: string) => Promise<any>
  warn: (text: string) => Promise<any>
  info: (text: string) => Promise<any>
}
