import { useState } from 'react'
import { MenuIcon } from 'lucide-react'

import { AppNavLink } from '@/components/app-nav-link'
import { CotaraLogo } from '@/components/cotara-logo'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { mainNavLinks } from '@/lib/navigation'

function AuthButtons({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button variant='outline' className='h-10 rounded-md px-5'>
        Log in
      </Button>
      <Button className='h-10 rounded-md px-5'>Sign up</Button>
    </div>
  )
}

const NavbarIndex = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className='sticky top-0 z-40 w-full border-b border-border/60 bg-background'>
      <div className='relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <CotaraLogo />

        <nav
          aria-label='Main navigation'
          className='absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex'
        >
          {mainNavLinks.map((link) => (
            <AppNavLink key={link.to} to={link.to} end={link.end}>
              {link.label}
            </AppNavLink>
          ))}
        </nav>

        <div className='hidden items-center md:flex'>
          <AuthButtons />
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <Button
                variant='ghost'
                size='icon'
                className='md:hidden'
                aria-label='Open menu'
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side='right' className='w-full max-w-xs'>
            <SheetHeader>
              <SheetTitle className='sr-only'>Navigation menu</SheetTitle>
              <CotaraLogo onClick={() => setMobileOpen(false)} />
            </SheetHeader>
            <nav
              aria-label='Mobile navigation'
              className='flex flex-col gap-6 px-4'
            >
              {mainNavLinks.map((link) => (
                <AppNavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className='text-base'
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </AppNavLink>
              ))}
            </nav>
            <div className='mt-auto px-4 pb-4'>
              <AuthButtons className='flex-col [&>button]:w-full' />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default NavbarIndex
