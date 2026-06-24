import { NavLink, type NavLinkProps } from 'react-router-dom'

import { cn } from '@/lib/utils'

type AppNavLinkProps = NavLinkProps & {
  className?: string
}

export function AppNavLink({
  className,
  children,
  ...props
}: AppNavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        cn(
          'text-sm font-medium transition-colors',
          isActive
            ? 'text-[#171717]'
            : 'text-[#73777F] hover:text-[#171717]',
          className,
        )
      }
    >
      {children}
    </NavLink>
  )
}
