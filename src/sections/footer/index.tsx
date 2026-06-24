import { AppNavLink } from '@/components/app-nav-link'
import { CotaraLogo } from '@/components/cotara-logo'
import { cn } from '@/lib/utils'
import { footerQuickLinks, socialLinks } from '@/lib/navigation'

function FooterExternalLink({
  href,
  label,
  className,
}: {
  href: string
  label: string
  className?: string
}) {
  return (
    <li>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={cn(
          'text-sm font-medium text-[#73777F] transition-colors hover:text-[#171717]',
          className,
        )}
      >
        {label}
      </a>
    </li>
  )
}

function LinkColumn({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <h3 className='mb-4 text-sm font-semibold text-foreground'>{title}</h3>
      <ul className='flex flex-col gap-3'>{children}</ul>
    </div>
  )
}

const FooterIndex = () => {
  return (
    <footer className='border-t border-border/60 bg-background'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:gap-x-20 lg:gap-y-0'>
          <div className='flex flex-col gap-6 sm:col-span-2 lg:col-span-1 lg:max-w-md'>
            <CotaraLogo />

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

          <LinkColumn title='Quick Links'>
            {footerQuickLinks.map((link) => (
              <li key={link.to}>
                <AppNavLink to={link.to} end={link.end}>
                  {link.label}
                </AppNavLink>
              </li>
            ))}
          </LinkColumn>

          <LinkColumn title='Social'>
            {socialLinks.map((link) => (
              <FooterExternalLink key={link.href} {...link} />
            ))}
          </LinkColumn>
        </div>
      </div>
    </footer>
  )
}

export default FooterIndex
