import type { HeadConfig } from '@vuepress/core'
import { getRandomElement } from '../utils'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/ico',
      sizes: '32x32',
      href: getRandomElement([
        '/icons/tang.ico',
        '/icons/gan.ico',
        '/icons/xiao.ico'
      ])
    }
  ]
]
