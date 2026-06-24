import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

export function CotaraLogo({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      to='/'
      onClick={onClick}
      className={cn('inline-flex shrink-0 items-center', className)}
    >
      <img
        src='/cotara_logo.svg'
        alt='cotara'
        width={134}
        height={34}
        className='h-[34px] w-auto'
      />
    </Link>
  )
}
