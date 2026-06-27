import { CaseStudyCard } from './components'
import { caseStudies } from './data'
import {
  useScrollReveal,
  useStaggerReveal,
} from '@/hooks/use-scroll-animation'

const CaseStudyIndex = () => {
  const heroRef = useScrollReveal<HTMLDivElement>()
  const cardsRef = useStaggerReveal<HTMLDivElement>()

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

        <div ref={heroRef} className='reveal-fade-up relative mx-auto max-w-[720px] px-4 pb-10 pt-16 text-center sm:px-6 sm:pt-20 lg:px-0 lg:pt-24'>
          <h1 className='text-3xl font-medium tracking-tight text-[#232325] sm:text-4xl lg:text-[52px] lg:leading-[54px] lg:tracking-[-2.44px]'>
            Use Case Stories
          </h1>
          <p className='mx-auto mt-3 max-w-[621px] text-sm leading-relaxed text-[#474749] sm:text-base lg:text-[16px] lg:leading-[24px]'>
            Cotara Does Not Just Track Donations. Cotara Reveals The Hidden
            People, Relationships, And Actions That Grow Support.
          </p>
        </div>
        <div className='px-4 pb-20 sm:px-0 lg:px-0'>
          <div ref={cardsRef} className='mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-[1fr_1.5fr_1fr]'>
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} className='stagger-item' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudyIndex
