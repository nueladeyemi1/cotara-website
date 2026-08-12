export const SITE_NAME = 'Cotara'

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://www.usecotara.com'
).replace(/\/$/, '')

export const DEFAULT_TITLE = 'Relationship Intelligence for Fundraising'

export const DEFAULT_DESCRIPTION =
  'Help nonprofits understand what brings supporters in, what keeps them connected, and what action to take next.'

export const DEFAULT_OG_IMAGE = '/community.jpg'

export const DEFAULT_OG_IMAGE_ALT =
  'Cotara: Relationship Intelligence for Fundraising'
