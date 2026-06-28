import { useEffect, useRef, useState } from 'react'
import {
  Check,
  Copy,
  // Facebook,
  // Linkedin,
  // Mail,
  MessageCircle,
  Share2,
  // Twitter,
} from 'lucide-react'

import {
  FacebookLogoIcon,
  XLogoIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react'

import { cn } from '@/lib/utils'

type ShareButtonProps = {
  title: string
  slug: string
  description?: string
  className?: string
  variant?: 'default' | 'icon'
}

function getShareUrl(slug: string) {
  return `${window.location.origin}/case-study/${slug}`
}

function buildShareLinks(url: string, title: string, description?: string) {
  const text = description ? `${title} — ${description}` : title

  return [
    {
      label: 'Facebook',
      icon: FacebookLogoIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: 'X (Twitter)',
      icon: XLogoIcon,
      href: `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      label: 'LinkedIn',
      icon: LinkedinLogoIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
    },
    // {
    //   label: 'Email',
    //   icon: Mail,
    //   href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`,
    // },
  ] as const
}

export function CaseStudyShareButton({
  title,
  slug,
  description,
  className,
  variant = 'default',
}: ShareButtonProps) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const shareUrl =
    typeof window !== 'undefined' ? getShareUrl(slug) : `/case-study/${slug}`
  const shareLinks = buildShareLinks(shareUrl, title, description)

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const handleToggle = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setOpen((prev) => !prev)
  }

  const handleNativeShare = async (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    if (navigator.share) {
      try {
        await navigator.share({ title, text: description, url: shareUrl })
        setOpen(false)
        return
      } catch {
        // User cancelled or share failed — fall through to menu
      }
    }

    setOpen((prev) => !prev)
  }

  const handleCopy = async (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
    } catch {
      // Clipboard unavailable
    }
  }

  const handleLinkClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    setOpen(false)
  }

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {variant === 'icon' ? (
        <button
          type='button'
          onClick={handleNativeShare}
          aria-label={`Share ${title}`}
          aria-expanded={open}
          className='inline-flex cursor-pointer size-9 items-center justify-center rounded-full border border-[#E3E3E3] bg-white/90 text-[#171717] backdrop-blur-sm transition-colors hover:bg-[#F9F9F9]'
        >
          <Share2 className='size-4' />
        </button>
      ) : (
        <button
          type='button'
          onClick={handleToggle}
          aria-expanded={open}
          className='inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg border border-[#E3E3E3] bg-white px-4 text-sm font-medium text-[#171717] transition-colors hover:bg-[#F9F9F9]'
        >
          <Share2 className='size-4' />
          Share
        </button>
      )}

      {open && (
        <div
          role='menu'
          className={cn(
            'absolute z-50 min-w-[200px] overflow-hidden rounded-xl border border-[#E3E3E3] bg-white py-1.5 shadow-lg',
            variant === 'icon'
              ? 'right-0 top-full mt-2'
              : 'left-0 top-full mt-2',
          )}
          onClick={(event) => event.stopPropagation()}
        >
          {shareLinks.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              role='menuitem'
              onClick={handleLinkClick}
              className='flex items-center gap-3 px-4 py-2.5 text-sm text-[#171717] transition-colors hover:bg-[#F9F9F9]'
            >
              <Icon className='size-4 shrink-0 text-[#73777F]' />
              {label}
            </a>
          ))}

          <div className='my-1 border-t border-[#E3E3E3]' />

          <button
            type='button'
            role='menuitem'
            onClick={handleCopy}
            className='flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left text-sm text-[#171717] transition-colors hover:bg-[#F9F9F9]'
          >
            {copied ? (
              <Check className='size-4 shrink-0 text-brand' />
            ) : (
              <Copy className='size-4 shrink-0 text-[#73777F]' />
            )}
            {copied ? 'Link copied' : 'Copy link'}
          </button>
        </div>
      )}
    </div>
  )
}
