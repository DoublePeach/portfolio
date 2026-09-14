import type { MetadataRoute } from 'next'

import { BASE_PATH } from '@/lib/base-path'

/** 生成站点 sitemap（含 basePath） */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteDomain = (process.env.NEXT_PUBLIC_APP_DOMAIN || 'http://localhost:5173').replace(/\/$/, '')
  const siteUrl = `${siteDomain}${BASE_PATH}`

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
