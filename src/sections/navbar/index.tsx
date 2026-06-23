import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Communities', href: '#communities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Case Study', href: '#case-study' },
] as const

function CoterieLogo({ className }: { className?: string }) {
  return (
    <a href='/' className={cn('inline-flex shrink-0 items-center', className)}>
      {/* TODO: Replace with coterie SVG logo */}
      <svg
        width='120'
        height='32'
        viewBox='0 0 120 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-label='coterie'
        className='text-foreground'
      >
        <rect
          x='0.5'
          y='0.5'
          width='119'
          height='31'
          rx='4'
          stroke='currentColor'
          strokeDasharray='4 3'
          strokeOpacity='0.4'
        />
        <text
          x='60'
          y='19'
          textAnchor='middle'
          fill='currentColor'
          fontSize='10'
          fontFamily='system-ui, sans-serif'
          opacity='0.5'
        >
          coterie logo
        </text>
      </svg>
    </a>
  )
}

function NavLink({
  href,
  label,
  className,
  onClick,
}: {
  href: string
  label: string
  className?: string
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
        className,
      )}
    >
      {label}
    </a>
  )
}

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
  return (
    <header className='sticky top-0 z-40 w-full border-b border-border/60 bg-background'>
      <div className='relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <CoterieLogo />

        <nav
          aria-label='Main navigation'
          className='absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex'
        >
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className='hidden items-center md:flex'>
          <AuthButtons />
        </div>

        <Sheet>
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
              <CoterieLogo />
            </SheetHeader>
            <nav
              aria-label='Mobile navigation'
              className='flex flex-col gap-6 px-4'
            >
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} className='text-base' />
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
