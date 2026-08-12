import { useLocation } from 'react-router-dom'

import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo'

type SeoProps = {
  /** Kept for call-site compatibility; document title is always DEFAULT_TITLE. */
  title?: string
  /** Kept for call-site compatibility; description is always DEFAULT_DESCRIPTION. */
  description?: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
  /** Override the canonical path. Defaults to the current route pathname. */
  canonicalPath?: string
}

export function Seo({
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
  canonicalPath,
}: SeoProps) {
  const location = useLocation()
  const path = canonicalPath ?? location.pathname
  const url = `${SITE_URL}${path}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <>
      <title>{DEFAULT_TITLE}</title>
      <meta name='description' content={DEFAULT_DESCRIPTION} />
      <link rel='canonical' href={url} />
      {noIndex && <meta name='robots' content='noindex, nofollow' />}

      <meta property='og:type' content={type} />
      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:title' content={DEFAULT_TITLE} />
      <meta property='og:description' content={DEFAULT_DESCRIPTION} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:image:alt' content={DEFAULT_OG_IMAGE_ALT} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={DEFAULT_TITLE} />
      <meta name='twitter:description' content={DEFAULT_DESCRIPTION} />
      <meta name='twitter:image' content={imageUrl} />
      <meta name='twitter:image:alt' content={DEFAULT_OG_IMAGE_ALT} />
    </>
  )
}
