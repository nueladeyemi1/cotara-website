export const SITE_NAME = 'Cotara'

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://usecotara.com'
).replace(/\/$/, '')

export const DEFAULT_DESCRIPTION =
  'Cotara helps nonprofits turn fragmented supporter data into clear intelligence about who gives, who returns, who invites others, and what actions grow support.'

export const DEFAULT_OG_IMAGE = '/community.jpg'
