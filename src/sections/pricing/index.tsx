import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { useScrollReveal } from '@/hooks/use-scroll-animation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

const features = [
  'Donor retention insights',
  'Hidden influencer map',
  'Referral and invitation tracking',
  'Campaign momentum dashboard',
  'Impact story support',
  'Board-ready reporting',
  'Secure org-scoped data handling',
] as const

const faqItems = [
  {
    value: 'what-is-cotara',
    question: 'What is Cotara?',
    answer:
      'Cotara is a nonprofit intelligence platform that helps organizations understand supporter behavior, retention, influence, and community momentum from their existing donor and volunteer data.',
  },
  {
    value: 'different-from-fundraising',
    question: 'How is Cotara different from fundraising platforms?',
    answer:
      'Fundraising platforms focus on collecting donations. Cotara focuses on understanding who drives support, who is at risk of leaving, and what actions will grow your community over time.',
  },
  {
    value: 'volunteer-opportunities',
    question: 'What types of volunteer opportunities are available?',
    answer:
      'Cotara helps you track participation across events, campaigns, referrals, and community activities so you can see which volunteers influence others and where engagement is growing.',
  },
  {
    value: 'hidden-influencer',
    question: 'What is a hidden influencer?',
    answer:
      'A hidden influencer is someone who may not give the most money personally but helps bring others into the campaign. Example: Jane gives $10,000. John gives $50 but invites 50 people, activates 20 donors, and helps generate $15,400. Cotara helps you see both.',
  },
  {
    value: 'data-secure',
    question: 'Is my data secure?',
    answer:
      'Yes. Cotara is built with secure, org-scoped data handling and non-custodial architecture designed for U.S. nonprofits.',
  },
] as const

type BillingPeriod = 'monthly' | 'yearly'

const pricing = {
  monthly: { amount: 299, suffix: '/month' },
  yearly: { amount: 249, suffix: '/month' },
} as const

function BillingToggle({
  value,
  onChange,
}: {
  value: BillingPeriod
  onChange: (value: BillingPeriod) => void
}) {
  return (
    <div className='inline-flex rounded-full bg-[#F9F9F9] border border-[#E3E3E3] p-1'>
      {(['monthly', 'yearly'] as const).map((period) => (
        <Button
          key={period}
          type='button'
          onClick={() => onChange(period)}
          className={cn(
            'rounded-full px-5 h-10 text-base font-normal! capitalize transition-colors hover:bg-inherit hover:text-[#171717]',
            value === period
              ? 'bg-brand text-brand-foreground shadow-sm'
              : 'text-[#73777F] bg-[#F9F9F9] hover:text-[#171717]',
          )}
        >
          {period}
        </Button>
      ))}
    </div>
  )
}

function FeatureItem({ children }: { children: string }) {
  return (
    <li className='flex items-start gap-3 text-base font-medium text-[#171717]'>
      <span
        aria-hidden='true'
        className='mt-2 size-2.5 shrink-0 rotate-45 bg-[#E3E3E3]'
      />
      <span>{children}</span>
    </li>
  )
}

const PricingIndex = () => {
  const [billing, setBilling] = useState<BillingPeriod>('monthly')
  const currentPricing = pricing[billing]
  const heroRef = useScrollReveal<HTMLDivElement>()
  const cardRef = useScrollReveal<HTMLDivElement>()
  const faqRef = useScrollReveal<HTMLDivElement>()
  const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL

  return (
    <>
      <section className='relative min-h-[601px] overflow-hidden bg-background'>
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
          className='reveal-fade-up relative mx-auto max-w-[670px] px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-20 lg:px-0 lg:pt-24'
        >
          <h1 className='text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl lg:text-[52px] lg:leading-[54px] lg:tracking-[-2.44px]'>
            Pricing built for understanding and growing support
          </h1>
          <p className='mx-auto mt-5 max-w-[621px] text-sm leading-relaxed text-[#73777F] sm:text-base lg:leading-[24px] lg:text-[16px]'>
            Start with your donor and supporter data. Cotara helps you uncover
            hidden influencers, retention risks, community momentum, and next
            actions for growth.
          </p>
          <div className='mt-8 flex justify-center'>
            <BillingToggle value={billing} onChange={setBilling} />
          </div>
        </div>

        <div className='relative px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24'>
          <div
            ref={cardRef}
            className='reveal-fade-up mx-auto max-w-[772px] border border-[#E3E3E3] p-3 rounded-[12px] bg-[#F9F9F9]'
          >
            <div className='overflow-hidden '>
              <div className='grid lg:grid-cols-[1fr_340px]'>
                <div className='flex flex-col gap-6 p-6 sm:p-8 lg:pr-5 lg:pl-3'>
                  <div>
                    <h2 className='text-2xl font-semibold text-[#171717]'>
                      Growth Plan
                    </h2>
                    <p className='mt-3 text-base font-normal leading-[24px] text-[#73777F]'>
                      For nonprofits ready to track support, influence,
                      retention, and campaign performance continuously.
                    </p>
                  </div>

                  <div>
                    <p className='text-base font-normal leading-[24px] text-[#73777F]'>
                      Starting at
                    </p>
                    <div className='mt-1 flex items-end gap-1'>
                      <span className='text-4xl font-medium tracking-tight text-[#171717] sm:text-[42px]'>
                        ${currentPricing.amount}
                      </span>
                      <span className='pb-1 text-base font-normal leading-[24px] text-[#73777F]'>
                        {currentPricing.suffix}
                      </span>
                    </div>
                    {billing === 'yearly' && (
                      <p className='mt-1 text-xs text-brand'>
                        Billed annually at $2,988/year
                      </p>
                    )}
                  </div>

                  <Link to={`${FRONTEND_URL}/auth/signup`}>
                    <Button className='h-11 w-full text-sm rounded-lg bg-brand text-brand-foreground hover:bg-brand/90'>
                      Get Started
                    </Button>
                  </Link>

                  <div>
                    <p className='text-base font-medium leading-[24px] text-[#73777F]'>
                      What includes:
                    </p>
                    <ul className='mt-4 flex flex-col gap-3'>
                      {features.map((feature) => (
                        <FeatureItem key={feature}>{feature}</FeatureItem>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className='relative min-h-[280px] lg:min-h-full'>
                  <img
                    src='/pricing-img.jpg'
                    alt='Volunteers organizing supplies in a warehouse'
                    className='h-full w-full object-cover lg:absolute lg:inset-0 rounded-[12px]'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-muted/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
        <div
          ref={faqRef}
          className='reveal-fade-up mx-auto grid max-w-6xl gap-10 lg:flex lg:gap-[96px]'
        >
          <div className='max-w-[339px]'>
            <p className='text-xs font-normal leading-[24px] text-brand uppercase'>
              FAQ
            </p>
            <h2 className='mt-3 text-3xl font-semibold text-[#232325] sm:text-[40px]'>
              Frequently Asked Questions
            </h2>
            <p className='mt-4 max-w-md text-base leading-relaxed text-[#73777F]'>
              Here&apos;s everything you need to know about how Cotara helps you
              grow donations and retain supporters.
            </p>
          </div>

          <Accordion
            className={'shadow-none! ring-0! gap-6!'}
            defaultValue={['hidden-influencer']}
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className='bg-[#FFFFFF] cursor-pointer text-[#171717] text-base shadow-none! ring-0! py-3! pl-5! pr-4!'>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className={'max-w-[665px]'}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}

export default PricingIndex
