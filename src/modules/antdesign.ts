import Antd from 'ant-design-vue'
import { type UserModule } from '~/types'

import 'ant-design-vue/dist/reset.css'

export const install: UserModule = ({ app }) => {
  app.use(Antd)
}
