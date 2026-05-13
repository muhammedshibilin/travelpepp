import { Metadata } from 'next';
import { SEO_CONFIG } from './seo-constants';

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}

export function constructMetadata({
  title = SEO_CONFIG.defaultTitle,
  description = SEO_CONFIG.defaultDescription,
  path = '',
  image = '/hero-india.png',
  type = 'website',
}: MetadataProps = {}): Metadata {
  const url = `${SEO_CONFIG.siteUrl}${path}`;

  return {
    title: {
      default: title,
      template: `%s | ${SEO_CONFIG.siteName}`,
    },
    description,
    metadataBase: new URL(SEO_CONFIG.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: SEO_CONFIG.twitterHandle,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
