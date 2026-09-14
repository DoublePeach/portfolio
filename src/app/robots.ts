import type { MetadataRoute } from 'next'

import { BASE_PATH } from '@/lib/base-path'

/** 生成 robots.txt（sitemap 指向带 basePath 的地址） */
export default function robots(): MetadataRoute.Robots {
  const siteDomain = (process.env.NEXT_PUBLIC_APP_DOMAIN || 'http://localhost:5173').replace(/\/$/, '')
  const siteUrl = `${siteDomain}${BASE_PATH}`

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
