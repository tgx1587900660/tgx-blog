import type { HeadConfig } from '@vuepress/core'
import { getRandomElement } from '../utils'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'shortcut icon',
      href: getRandomElement([
        '/shortcut/tang.ico',
        '/shortcut/gan.ico',
        '/shortcut/xiao.ico'
      ])
    }
  ]
]
