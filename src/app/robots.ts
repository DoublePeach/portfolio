import type { MetadataRoute } from 'next'

/** 生成 robots.txt */
export default function robots(): MetadataRoute.Robots {
  const siteDomain = (process.env.NEXT_PUBLIC_APP_DOMAIN || 'http://localhost:5173').replace(/\/$/, '')

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${siteDomain}/sitemap.xml`,
  }
}
