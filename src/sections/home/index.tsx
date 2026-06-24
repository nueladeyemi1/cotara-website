import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const featureCards = [
  {
    image: '/main-page-img-1.png',
    title: 'Understand your supporters',
    description:
      'Cotara connects donors, members, volunteers, visitors, event attendees, ambassadors, and corporate contacts into one clearer relationship view.',
    href: '/case-study/the-volunteer-who-was-more-than-a-volunteer',
    offset: false,
  },
  {
    image: '/main-page-img-2.png',
    title: 'Find hidden influencers',
    description:
      'Identify the people who invite others, activate donors, and move campaigns through their community — even when they are not your biggest donors.',
    href: '/case-study/the-50-donor-who-moved-15400',
    offset: true,
  },
  {
    image: '/main-page-img-3.png',
    title: 'Grow through your community',
    description:
      'Spot first-time donors at risk, understand follow-up gaps, and know who needs an impact update, thank-you, or next-best ask.',
    href: '/case-study/the-campaign-that-raised-money-but-lost-momentum',
    offset: false,
  },
  {
    image: '/main-page-img-4.png',
    title: 'Community Health',
    description: (
      <>
        <span className='font-semibold text-[#FF8A00]'>Momentum</span> Increased
        Because Two Community Influencer Shared The Campaign Overnight, Driving
        85 New Participants.
      </>
    ),
    href: '/case-study/the-campaign-that-raised-money-but-lost-momentum',
    offset: true,
  },
] as const

function FeatureCard({
  image,
  title,
  description,
  href,
  offset,
}: {
  image: string
  title: string
  description: React.ReactNode
  href: string
  offset: boolean
}) {
  return (
    <article
      className={cn(
        'flex flex-col rounded-[20px] h-max border border-[#F0F1F2] bg-white p-3',
        offset && 'lg:mt-16',
      )}
    >
      <img
        src={image}
        alt=''
        className='h-[309px]! w-full rounded-[16px] border border-[#EDEDED] object-cover sm:h-[260px]'
      />
      <h3 className='mt-5 text-lg font-medium leading-7.5 tracking-[-2%] text-[#171717]'>
        {title}
      </h3>
      <p className='mt-1.5 flex-1 text-base leading-6 text-[#73777F]'>
        {description}
      </p>
      <Link
        to={href}
        aria-label={`Read more about ${title}`}
        className='mt-4 inline-flex size-10 items-center justify-center self-end rounded-full border border-[#E3E3E3] text-[#171717] transition-colors hover:bg-[#F9F9F9]'
      >
        <ArrowUpRightIcon className='size-4' />
      </Link>
    </article>
  )
}

const HomeIndex = () => {
  return (
    <>
      <section className='relative overflow-hidden bg-background pb-10 lg:pb-16'>
        <div className='mx-auto max-w-[760px] px-4 pt-14 text-center lg:text-left lg:max-w-[1200px] sm:px-6 sm:pt-16 lg:px-0 lg:pt-20'>
          <div className='inline-flex items-center gap-2 rounded-full border border-[#F2F2F2] bg-[#FFFFFF] pl-2.5 pr-[15px] py-[5px] lg:gap-11 text-xs font-medium tracking-wide text-brand uppercase'>
            {/* <span aria-hidden='true'>🔥</span>
            V2.0 IS LIVE. SEE RELEASE NOTE */}
            🔥 V2.0 Is Live. see Release note
            <div>
              <ArrowRight size={14} />
            </div>
          </div>

          <h1 className='mt-6 lg:mt-0 text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl lg:text-[45px] lg:leading-[54px] lg:tracking-[-2.44px]'>
            Your CRM shows who donated. <br />
            Cotara shows who moved giving.
          </h1>

          <p className='mx-auto mt-4 max-w-[621px] text-sm leading-relaxed text-[#73777F] lg:mx-0 sm:text-base lg:text-[16px] lg:leading-[24px]'>
            Cotara helps nonprofits understand the people behind support — who
            gives, who returns, who invites others, and which communities turn
            generosity into growth.
          </p>

          <div className='mt-8 lg:mt-10 flex flex-col items-center justify-center lg:justify-start gap-2.5 sm:flex-row'>
            <Button className='h-11 w-full rounded-[6px] bg-brand px-6 text-base font-medium text-brand-foreground hover:bg-brand/90 sm:w-auto'>
              Get started
            </Button>
            <Link
              to='/pricing'
              className='inline-flex h-11 w-full items-center justify-center rounded-[6px] bg-[#171717] px-6 text-base font-medium text-white hover:bg-[#171717]/90 sm:w-auto'
            >
              See Pricing
            </Link>
          </div>
        </div>

        <div className='relative pt-10 lg:pt-12'>
          <div
            aria-hidden='true'
            className='home-hero-bg pointer-events-none absolute left-1/2 top-0 z-0 w-screen -translate-x-1/2 -translate-y-16 sm:-translate-y-20 lg:-translate-y-24'
          >
            <img
              src='/main-page-hero-bg.svg'
              alt=''
              className='h-full w-full select-none object-cover object-bottom'
            />
          </div>

          <div className='relative z-10 mx-auto max-w-[1200px]'>
            <img
              src='/main-page-dashboard-img.png'
              alt='Cotara dashboard showing campaign analytics and community insights'
              className='w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]'
            />
          </div>
        </div>
      </section>

      <section className='px-4 py-16 sm:px-6 lg:px-0 lg:py-24'>
        <div className='mx-auto max-w-4xl text-center'>
          <p className='text-xs font-medium tracking-[0%] leading-4 text-brand uppercase'>
            How Cotara helps you grow
          </p>
          <h2 className='mt-2.5 text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl lg:text-[42px] lg:leading-[50px] lg:tracking-[-2px]'>
            Understand what drives giving.
            <br />
            Grow what actually works.
          </h2>
          <p className='mx-auto mt-5 max-w-[621px] text-base leading-6 text-[#73777F]'>
            Cotara turns donor, member, volunteer, event, and campaign data into
            clear intelligence your team can act on.
          </p>
        </div>

        <div className='mx-auto mt-12 grid max-w-[1200px] gap-3 sm:grid-cols-2 lg:grid-cols-4'>
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </section>
    </>
  )
}

export default HomeIndex
