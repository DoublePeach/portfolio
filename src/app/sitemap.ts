import type { MetadataRoute } from 'next'

/** 生成站点 sitemap */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteDomain = process.env.NEXT_PUBLIC_APP_DOMAIN || 'http://localhost:5173'

  return [
    {
      url: siteDomain,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
