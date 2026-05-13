import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/lib/seo-constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/destinations', '/packages', '/about', '/contact'].map(
    (route) => ({
      url: `${SEO_CONFIG.siteUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  return routes;
}
