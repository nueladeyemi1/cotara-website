// import {
//   useState,
//   // useEffect,
//   // useRef,
//   // useCallback,
//   type ChangeEvent,
// } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  // Search,
  //  Loader2
} from 'lucide-react'

import {
  // useCommunities,
  type Community,
} from '@/hooks/use-communities'
import { Seo } from '@/components/seo'
import { useScrollReveal } from '@/hooks/use-scroll-animation'

// function useDebounce<T>(value: T, delay: number): T {
//   const [debounced, setDebounced] = useState(value)

//   useEffect(() => {
//     const timer = setTimeout(() => setDebounced(value), delay)
//     return () => clearTimeout(timer)
//   }, [value, delay])

//   return debounced
// }

const SIGNUP_URL = 'https://org.usecotara.com/auth/signup'

function CommunityCard({ community }: { community: Community }) {
  return (
    <article
      role='link'
      tabIndex={0}
      onClick={() => {
        window.location.href = SIGNUP_URL
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          window.location.href = SIGNUP_URL
        }
      }}
      className='flex cursor-pointer flex-col rounded-[12px] border border-[#E3E3E3] bg-[#F9F9F9]'
    >
      <div className='m-2 flex h-[194px] items-center justify-center overflow-hidden rounded-[12px] border border-[#E3E3E3] bg-[#F9F9F9]'>
        {community.imageUrl && (
          <img
            src={community.imageUrl}
            alt=''
            className='h-full w-full rounded-xl object-cover'
          />
        )}
      </div>

      <div className='flex flex-1 flex-col px-3 pb-5 pt-3'>
        <h3 className='text-lg font-medium leading-7.5 tracking-[-2%] text-[#171717]'>
          {community.name}
        </h3>
        <p className='mt-1.5 flex-1 text-base leading-[24px] text-[#73777F] line-clamp-3'>
          {community.description}
        </p>
        <Link
          // to={`/communities/${community.slug}`}
          to='/case-study'
          onClick={(e) => e.stopPropagation()}
          className='mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#171717]'
        >
          Explore use case
          <ArrowRight className='size-4 text-[#171717]' />
        </Link>
      </div>
    </article>
  )
}

// function CardSkeleton() {
//   return (
//     <div className='animate-pulse rounded-2xl border border-[#E3E3E3] bg-white'>
//       <div className='m-4 h-[160px] rounded-xl bg-[#F0F0F0]' />
//       <div className='px-4 pb-5'>
//         <div className='h-5 w-3/5 rounded bg-[#F0F0F0]' />
//         <div className='mt-3 space-y-2'>
//           <div className='h-4 w-full rounded bg-[#F0F0F0]' />
//           <div className='h-4 w-4/5 rounded bg-[#F0F0F0]' />
//         </div>
//         <div className='mt-4 h-4 w-28 rounded bg-[#F0F0F0]' />
//       </div>
//     </div>
//   )
// }

const CommunityIndex = () => {
  // const [searchInput, setSearchInput] = useState('')
  // const search = useDebounce(searchInput, 400)
  // const sentinelRef = useRef<HTMLDivElement>(null)
  const heroRef = useScrollReveal<HTMLDivElement>()

  // const {
  //   data,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  //   isLoading,
  //   isError,
  // } = useCommunities(search)

  // const communities = data?.pages.flatMap((page) => page.items) ?? []

  const STATIC_COMMUNITIES: Community[] = [
    {
      id: 1,
      name: 'Faith Organizations',
      description:
        'Track giving, volunteering, small groups, member participation, and who invites others into campaigns.',
      imageUrl: 'faith.jpg',
    },
    {
      id: 2,
      name: 'Diaspora Nonprofits',
      description:
        'Understand how giving spreads through trusted community networks, WhatsApp-style referrals, and local ambassadors.',
      imageUrl: 'diaspora.jpg',
    },
    {
      id: 3,
      name: 'Alumni Networks',
      description:
        'See which chapters, classes, and alumni ambassadors drive repeat giving and campaign participation.',
      imageUrl: 'alumni.jpg',
    },
    {
      id: 4,
      name: 'Conservation & Nature Centers',
      description:
        'Connect visitors, members, volunteers, donors, corporate partners, and planned-giving prospects into one supporter view.',
      imageUrl: 'nature.jpg',
    },
    {
      id: 5,
      name: 'Community Foundations',
      description:
        'Understand donor retention, grantee engagement, community participation, and which relationships are ready for the next ask.',
      imageUrl: 'foundation.jpg',
    },
    {
      id: 6,
      name: 'Cultural Institutions',
      description:
        'Track members, patrons, event attendees, donors, and community advocates across campaigns and programs.',
      imageUrl: 'cultural.jpg',
    },
    {
      id: 7,
      name: 'Youth & Education Nonprofits',
      description:
        'See how parents, alumni, volunteers, donors, and program supporters move from participation to long-term support.',
      imageUrl: 'youth.jpg',
    },
    {
      id: 8,
      name: 'Community Development Organizations',
      description:
        'Map supporters, funders, partners, volunteers, and neighborhood relationships around the people and communities you serve.',
      imageUrl: 'community.jpg',
    },
  ]

  // const handleLoadMore = useCallback(() => {
  //   if (hasNextPage && !isFetchingNextPage) {
  //     fetchNextPage()
  //   }
  // }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  // useEffect(() => {
  //   const sentinel = sentinelRef.current
  //   if (!sentinel) return

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {
  //         handleLoadMore()
  //       }
  //     },
  //     { rootMargin: '200px' },
  //   )

  //   observer.observe(sentinel)
  //   return () => observer.disconnect()
  // }, [handleLoadMore])

  // const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchInput(e.target.value)
  // }

  return (
    <section className='relative min-h-[601px] overflow-hidden bg-background'>
      <Seo
        title='Communities'
        description='Search by organization, community, or cause. See how Cotara helps faith groups, diaspora nonprofits, alumni networks, and more grow support.'
      />
      <div
        aria-hidden='true'
        className='pricing-hero-bg pointer-events-none absolute inset-x-0 top-0 w-full'
      >
        <img
          src='/Header.svg'
          alt=''
          className='h-full min-h-[601px] w-full select-none object-cover object-top'
        />
      </div>

      <div
        ref={heroRef}
        className='reveal-fade-up relative mx-auto max-w-[660px] px-4 pt-16 text-center sm:px-6 sm:pt-20 lg:px-0 lg:pt-24'
      >
        <h1 className='text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl lg:text-[42px] lg:leading-[50px] lg:tracking-[-2px]'>
          Search by organization, community, or cause
        </h1>
        <p className='mx-auto mt-4 max-w-[540px] text-sm leading-relaxed text-[#73777F] sm:text-base lg:text-[16px] lg:leading-[24px]'>
          Cotara helps nonprofits turn fragmented supporter data into clear
          intelligence about who gives, who returns, who invites others, and
          what actions grow support.
        </p>

        {/* <div className='relative mx-auto mt-8 max-w-[460px]'>
          <Search className='pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-[#A0A0A0]' />
          <input
            type='text'
            value={searchInput}
            onChange={handleSearchChange}
            placeholder='Search communities...'
            className='h-12 w-full rounded-xl border border-[#E3E3E3] bg-white pl-11 pr-4 text-sm text-[#171717] outline-none placeholder:text-[#A0A0A0] focus:border-brand focus:ring-1 focus:ring-brand'
          />
        </div> */}
      </div>

      <div className='relative mx-auto max-w-[1200px] px-4 pb-20 pt-12 sm:px-6 lg:px-0'>
        {/* {isError && STATIC_COMMUNITIES.length === 0 && (
          <p className='py-12 text-center text-base text-[#73777F]'>
            Unable to load communities. Please try again.
          </p>
        )} */}

        {/* {isLoading && (
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        )} */}

        {/* {!isLoading && !isError && STATIC_COMMUNITIES.length === 0 && (
          <p className='py-12 text-center text-base text-[#73777F]'>
            No communities found
            {search ? ` for "${search}"` : ''}.
          </p>
        )} */}

        {STATIC_COMMUNITIES.length > 0 && (
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {STATIC_COMMUNITIES.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}

            {/* {isFetchingNextPage &&
              Array.from({ length: 3 }).map((_, i) => (
                <CardSkeleton key={`loading-${i}`} />
              ))} */}
          </div>
        )}

        {/* {hasNextPage && !isLoading && (
          <div ref={sentinelRef} className='flex justify-center pt-8'>
            {isFetchingNextPage && (
              <Loader2 className='size-6 animate-spin text-brand' />
            )}
          </div>
        )} */}
      </div>
    </section>
  )
}

export default CommunityIndex
