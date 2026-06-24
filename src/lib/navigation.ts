export type NavItem = {
  label: string
  to: string
  end?: boolean
}

export const mainNavLinks: NavItem[] = [
  { label: 'Communities', to: '/communities' },
  { label: 'Pricing', to: '/pricing', end: true },
  { label: 'Case Study', to: '/case-study' },
]

export const footerQuickLinks: NavItem[] = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  { label: 'Case Study', to: '/case-study' },
]

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Linkedin', href: 'https://linkedin.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
] as const
