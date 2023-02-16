import clsx from 'clsx'
//@ts-ignore
import moment from 'moment/min/moment-with-locales'
import message from '@/components/Message'

moment.locale('zh-cn')

export const install: UseModule = ({ app }) => {
  app.config.globalProperties.$clsx = clsx
  app.config.globalProperties.$moment = moment
  app.config.globalProperties.$message = message
}
