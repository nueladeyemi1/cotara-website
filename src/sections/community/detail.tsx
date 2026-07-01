import { useEffect, useRef, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowUpRight, Loader2 } from 'lucide-react'

import { useCommunity } from '@/hooks/use-communities'
import { useScrollReveal } from '@/hooks/use-scroll-animation'
import { useCommunityCampaigns, type Campaign } from '@/hooks/use-campaigns'
import { FRONTEND_URL } from '@/lib/env'

function formatCents(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100)
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`
  return String(n)
}

function getDaysRemaining(endDate: string): number {
  const diff = new Date(endDate).getTime() - Date.now()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

function CampaignCard({ campaign }: { campaign: Campaign }) {
  const raised = campaign.totalRaisedCents
  const goal = campaign.goalAmountCents
  const percent =
    goal > 0 ? Math.min(Math.round((raised / goal) * 100), 100) : 0
  const days = campaign.endDate ? getDaysRemaining(campaign.endDate) : null

  return (
    <article className='flex overflow-hidden rounded-[20px] p-5 border border-[#F0F1F2] bg-white'>
      <div className='flex w-[262px] lg:min-w-[230px] shrink-0 rounded-[20px] border border-[#F0F1F2] items-center justify-center overflow-hidden bg-[#F5A623]/20 sm:w-[160px]'>
        {campaign.imageUrl ? (
          <img
            src={campaign.imageUrl}
            alt=''
            className='h-full w-full object-cover rounded-[20px] sm:rounded-[16px]'
          />
        ) : (
          <div className='h-full w-full bg-[#F5A623]/20' />
        )}
      </div>

      <div className='flex flex-1 flex-col lg:pl-5 lg:py-4 lg:pr-0 sm:p-5'>
        <h3 className='text-lg font-medium leading-7.5 tracking-[-2%] text-[#232325]'>
          {campaign.name}
        </h3>
        <p className='mt-1 line-clamp-2 text-sm leading-[150%] tracking-[0%] text-[#4F4F52]'>
          {campaign.description}
        </p>

        <div className='mt-3 flex items-end justify-between'>
          <div>
            <p className='text-sm font-medium leading-[150%] tracking-[0%] text-[#232325]'>
              {formatCents(raised)}
            </p>
            <p className='text-xs text-[#68686B]'>
              Raised Of {formatCents(goal)}
            </p>
          </div>
          <span className='text-base font-semibold text-[#232325]'>
            {percent}%
          </span>
        </div>

        <div className='mt-2 h-[6px] w-full overflow-hidden rounded-full bg-[#E8F5EF]'>
          <div
            className='h-full rounded-full bg-brand transition-all'
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className='text-xs leading-[150%] tracking-[0%] text-[#929292] mt-1'>
          {days !== null && `${days} Days · `}
          {formatCount(campaign.donationsCount)} Donations
        </p>
        <div className='mt-3 flex items-center justify-end'>
          {/* <p className='lg:hidden text-xs leading-[150%] tracking-[0%] text-[#929292]'>
            {days !== null && `${days} Days · `}
            {formatCount(campaign.donationsCount)} Donations
          </p> */}
          <Link
            to={`${FRONTEND_URL}/user/campaign/public/donate/${campaign.slug}`}
            className='inline-flex size-8 items-center justify-center rounded-full border border-[#E3E3E3] text-[#171717] transition-colors hover:bg-[#F9F9F9]'
          >
            <ArrowUpRight className='size-3.5' />
          </Link>
        </div>
      </div>
    </article>
  )
}

function CampaignSkeleton() {
  return (
    <div className='flex animate-pulse overflow-hidden rounded-2xl border border-[#E3E3E3] bg-white'>
      <div className='w-[140px] shrink-0 bg-[#F0F0F0] sm:w-[160px]' />
      <div className='flex flex-1 flex-col p-4 sm:p-5'>
        <div className='h-5 w-3/5 rounded bg-[#F0F0F0]' />
        <div className='mt-2 h-4 w-full rounded bg-[#F0F0F0]' />
        <div className='mt-4 h-6 w-24 rounded bg-[#F0F0F0]' />
        <div className='mt-1 h-3 w-32 rounded bg-[#F0F0F0]' />
        <div className='mt-3 h-[6px] w-full rounded-full bg-[#F0F0F0]' />
        <div className='mt-2 h-3 w-36 rounded bg-[#F0F0F0]' />
      </div>
    </div>
  )
}

const CommunityDetailIndex = () => {
  const { slug = '' } = useParams<{ slug: string }>()
  const sentinelRef = useRef<HTMLDivElement>(null)
  const headerRef = useScrollReveal<HTMLDivElement>()

  const { data: community, isLoading: communityLoading } = useCommunity(slug)

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: campaignsLoading,
    isError,
  } = useCommunityCampaigns(slug)

  const campaigns = data?.pages.flatMap((page) => page.items) ?? []

  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore()
        }
      },
      { rootMargin: '200px' },
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [handleLoadMore])

  const isLoading = communityLoading || campaignsLoading

  return (
    <section className='mx-auto max-w-[1200px] px-4 pb-20 pt-10 sm:px-6 lg:px-0 lg:pt-14'>
      <div ref={headerRef} className='reveal-fade-up mb-10'>
        {communityLoading ? (
          <div className='animate-pulse'>
            <div className='h-4 w-24 rounded bg-[#F0F0F0]' />
            <div className='mt-3 h-10 w-72 rounded bg-[#F0F0F0]' />
          </div>
        ) : (
          <>
            {community?.ownerType && (
              <p className='text-sm font-medium uppercase tracking-wide text-brand'>
                {community.ownerType}
              </p>
            )}
            <h1 className='mt-1 text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl lg:text-[42px] lg:leading-[50px] lg:tracking-[-2px]'>
              {community?.name ?? slug}
            </h1>
          </>
        )}
      </div>

      {isError && campaigns.length === 0 && (
        <p className='py-12 text-center text-base text-[#73777F]'>
          Unable to load campaigns. Please try again.
        </p>
      )}

      {isLoading && (
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
          {Array.from({ length: 4 }).map((_, i) => (
            <CampaignSkeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && !isError && campaigns.length === 0 && (
        <p className='py-12 text-center text-base text-[#73777F]'>
          No campaigns found for this community.
        </p>
      )}

      {!isLoading && campaigns.length > 0 && (
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}

          {isFetchingNextPage &&
            Array.from({ length: 2 }).map((_, i) => (
              <CampaignSkeleton key={`loading-${i}`} />
            ))}
        </div>
      )}

      {hasNextPage && !isLoading && (
        <div ref={sentinelRef} className='flex justify-center pt-8'>
          {isFetchingNextPage && (
            <Loader2 className='size-6 animate-spin text-brand' />
          )}
        </div>
      )}
    </section>
  )
}

export default CommunityDetailIndex
