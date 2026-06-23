import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

const quickLinks = [
  { label: 'Privacy Policy', href: '#privacy-policy', external: false },
  { label: 'Terms & Conditions', href: '/terms-and-conditions', external: false },
  { label: 'Case Study', href: '#case-study', external: false },
] as const

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Linkedin', href: 'https://linkedin.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
] as const

function FooterLink({
  href,
  label,
  className,
  external = false,
}: {
  href: string
  label: string
  className?: string
  external?: boolean
}) {
  const linkClassName = cn(
    'text-sm text-muted-foreground transition-colors hover:text-foreground',
    className,
  )

  if (external || href.startsWith('http') || href.startsWith('#')) {
    return (
      <li>
        <a href={href} className={linkClassName}>
          {label}
        </a>
      </li>
    )
  }

  return (
    <li>
      <Link to={href} className={linkClassName}>
        {label}
      </Link>
    </li>
  )
}

function LinkColumn({
  title,
  links,
  className,
}: {
  title: string
  links: readonly { label: string; href: string; external?: boolean }[]
  className?: string
}) {
  return (
    <div className={className}>
      <h3 className='mb-4 text-sm font-semibold text-foreground'>{title}</h3>
      <ul className='flex flex-col gap-3'>
        {links.map((link) => (
          <FooterLink key={link.label} {...link} />
        ))}
      </ul>
    </div>
  )
}

const FooterIndex = () => {
  return (
    <footer className='border-t border-border/60 bg-background'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:gap-x-20 lg:gap-y-0'>
          <div className='flex flex-col gap-6 sm:col-span-2 lg:col-span-1 lg:max-w-md'>
            <Link to='/' className='inline-flex w-fit'>
              <img
                src='/cotara_logo.svg'
                alt='cotara'
                width={134}
                height={34}
                className='h-[34px] w-auto'
              />
            </Link>

            <p className='text-sm leading-relaxed text-muted-foreground'>
              Cotara helps nonprofits understand the hidden drivers of support
              — retention, influence, trust, community participation, and impact
              visibility.
            </p>

            <div className='mt-2 space-y-1 sm:mt-8 lg:mt-auto lg:pt-10'>
              <p className='text-xs text-muted-foreground/70'>
                © 2026 Cotara Technology LLC. All rights reserved.
              </p>
              <p className='text-xs text-muted-foreground/70'>
                Secure. Non-custodial. Built for U.S. nonprofits.
              </p>
            </div>
          </div>

          <LinkColumn title='Quick Links' links={quickLinks} />
          <LinkColumn title='Social' links={socialLinks} />
        </div>
      </div>
    </footer>
  )
}

export default FooterIndex
