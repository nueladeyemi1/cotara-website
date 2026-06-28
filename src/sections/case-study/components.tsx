import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'
import type { CaseStudy, CaseStudySection } from './data'
import { CaseStudyShareButton } from './share-button'

function P({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn('mt-4 text-base leading-6 text-[#73777F]', className)}>
      {children}
    </p>
  )
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className='mt-4 list-disc space-y-2 pl-6 text-base leading-6 text-[#7D8186]'>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function SectionBlock({ section }: { section: CaseStudySection }) {
  return (
    <section className='mt-5'>
      <h2 className='text-xl font-semibold text-[#030C12]'>{section.title}</h2>
      {section.paragraphs?.map((paragraph) => (
        <P key={paragraph}>{paragraph}</P>
      ))}
      {section.bullets && <BulletList items={section.bullets} />}
      {section.nestedBullets && (
        <>
          {section.nestedBullets.intro && <P>{section.nestedBullets.intro}</P>}
          <BulletList items={section.nestedBullets.items} />
        </>
      )}
      {section.closing && <P>{section.closing}</P>}
    </section>
  )
}

function CaseStudyHero({
  study,
  children,
}: {
  study: CaseStudy
  children: React.ReactNode
}) {
  return (
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

      <div className='relative mx-auto max-w-[670px] px-4 pb-8 pt-16 sm:px-6 sm:pt-20 lg:px-0 lg:pt-24 lg:max-w-[1200px]'>
        <p className='text-base text-[#73777F]'>{study.date}</p>
        <h1 className='mt-3 text-3xl font-medium tracking-tight text-[#171717] max-w-[470px] sm:text-4xl lg:text-[42px] lg:leading-[50px] lg:tracking-[-2px]'>
          {study.title}
        </h1>

        <div className='mt-6 flex flex-wrap items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <div className=''>
            <svg
              width='52'
              height='52'
              viewBox='0 0 52 52'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <circle
                cx='26'
                cy='26'
                r='25.5'
                fill='url(#pattern0_4101_4159)'
                stroke='#CFCFCF'
              />
              <defs>
                <pattern
                  id='pattern0_4101_4159'
                  patternContentUnits='objectBoundingBox'
                  width='1'
                  height='1'
                >
                  <use
                    xlinkHref='#image0_4101_4159'
                    transform='scale(0.00416667)'
                  />
                </pattern>
                <image
                  id='image0_4101_4159'
                  width='240'
                  height='240'
                  preserveAspectRatio='none'
                  xlinkHref='data:image/png;base64,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'
                />
              </defs>
            </svg>
          </div>

          <div>
            <p className='text-base font-medium text-[#171717]'>
              Author: {study.author}
            </p>
            <p className='text-[15px] text-[#BBBBBB]'>{study.readTime}</p>
          </div>
          </div>

          <CaseStudyShareButton
            title={study.title}
            slug={study.slug}
            description={study.cardDescription}
          />
        </div>

        <div className='mt-8 border-b border-[#E3E3E3]' />
      </div>

      {children}
    </section>
  )
}

export function CaseStudyDetailPage({ study }: { study: CaseStudy }) {
  return (
    <>
      <CaseStudyHero study={study}>
        <article className='mx-auto max-w-[670px] px-4 pb-20 sm:px-6 lg:px-0'>
          <p className='text-xl font-semibold text-[#030C12]'>
            {study.introBold}
          </p>
          <P className='mt-2 text-[#7D8186] leading-[24px]'>{study.intro}</P>

          <SectionBlock section={study.situation} />

          <section className='mt-10 rounded-[12px] bg-[#F9F9F9] border border-[#E3E3E3] p-7.5'>
            <h2 className='text-xl font-semibold text-[#030C12]'>
              {study.revealed.title}
            </h2>
            {study.revealed.paragraphs?.map((paragraph) => (
              <P key={paragraph}>{paragraph}</P>
            ))}
            {study.revealed.bullets && (
              <BulletList items={study.revealed.bullets} />
            )}
            {study.revealed.closing?.map((paragraph) => (
              <P key={paragraph}>{paragraph}</P>
            ))}
          </section>

          <SectionBlock section={study.insights} />
          <SectionBlock section={study.changed} />

          <section className='mt-10'>
            <h2 className='text-xl font-semibold text-[#030C12]'>
              {study.helpedThemSee.title}
            </h2>
            <BulletList items={study.helpedThemSee.bullets} />
          </section>

          <div className='mt-10 flex items-center justify-between gap-4 border-t border-[#E3E3E3] pt-8'>
            <p className='text-sm text-[#73777F]'>Found this useful? Share it.</p>
            <CaseStudyShareButton
              title={study.title}
              slug={study.slug}
              description={study.cardDescription}
            />
          </div>
        </article>
      </CaseStudyHero>
    </>
  )
}

export function CaseStudyCard({
  study,
  className,
}: {
  study: CaseStudy
  className?: string
}) {
  return (
    <Link
      to={`/case-study/${study.slug}`}
      className={cn(
        'group relative flex min-h-[420px] flex-col overflow-hidden transition-transform hover:scale-[1.01]',
        study.cardRadiusClass,
        className,
      )}
      style={{ backgroundColor: study.accent }}
    >
      <CaseStudyShareButton
        title={study.title}
        slug={study.slug}
        description={study.cardDescription}
        variant='icon'
        className='absolute right-4 top-4 z-10'
      />
      <img
        src={study.image}
        alt=''
        className='mx-auto mt-6 h-[280px] w-auto object-contain object-bottom'
      />
      <div className='absolute inset-x-4 bottom-4 rounded-xl border min-h-[159px] border-white/40 bg-white/60 p-5 backdrop-blur-[35px]'>
        <h3 className='text-base font-medium leading-[150%] text-[#232325] max-w-[240px]'>
          {study.title}
        </h3>
        <p className='mt-2 text-sm leading-[150%] text-[#4F4F52]'>
          {study.cardDescription}
        </p>
      </div>
    </Link>
  )
}
