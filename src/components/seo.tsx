import { useLocation } from 'react-router-dom'

import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo'

type SeoProps = {
  title: string
  description?: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
  /** Override the canonical path. Defaults to the current route pathname. */
  canonicalPath?: string
}

export function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
  canonicalPath,
}: SeoProps) {
  const location = useLocation()
  const path = canonicalPath ?? location.pathname
  const url = `${SITE_URL}${path}`
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={url} />
      {noIndex && <meta name='robots' content='noindex, nofollow' />}

      <meta property='og:type' content={type} />
      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={imageUrl} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageUrl} />
    </>
  )
}
