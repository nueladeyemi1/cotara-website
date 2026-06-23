import { ArrowRightIcon } from 'lucide-react'

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='mt-10 text-base font-semibold text-[#171717] first:mt-0'>
      {children}
    </h2>
  )
}

function SubSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className='mt-5 text-base font-semibold text-[#171717]'>{children}</h3>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className='mt-4 text-base leading-6 text-[#73777F] first:mt-0'>
      {children}
    </p>
  )
}

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className='mt-4 list-disc space-y-2 pl-5 text-base leading-6 text-[#73777F]'>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

const TermsAndConditionIndex = () => {
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

        <div className='relative mx-auto max-w-[526px] px-4 pt-16 text-center sm:px-6 sm:pt-20 lg:px-0 lg:pt-24'>
          <div className='mb-5 flex items-center gap-2 border border-[#F2F2F2] px-[15px] py-[5px] rounded-full text-sm font-medium text-[#099557] w-max mx-auto uppercase'>
            Terms & Condition
            <ArrowRightIcon className='w-3 h-3' />
          </div>
          <h1 className='text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl lg:text-[52px] lg:leading-[54px] lg:tracking-[-2.44px]'>
            Understand how you can use Cotara.
          </h1>
          <p className='mx-auto mt-5 max-w-[210px] text-sm leading-relaxed text-[#73777F] sm:text-base lg:leading-[24px] lg:text-[16px]'>
            Cotara Technology LLC
            <span>
              <br />
              Last updated: April 21, 2026
            </span>
          </p>
        </div>

        <article className='relative mx-auto max-w-[800px] px-4 pb-20 pt-5 sm:px-6 sm:pt-5 lg:px-0 lg:pt-5'>
          <P>
            Cotara Technology LLC (&quot;Coterie,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) is a federally incorporated
            Canadian corporation headquartered in 11450 U.S. 380, Suite 130,
            Cross Roads, TX 76227, United States. We operate a donor engagement
            and fundraising platform available at usecoterie.com and through our
            mobile application (collectively, the &quot;Platform&quot;).
          </P>

          <P>
            Cotara is a technology platform. We are not a registered charity,
            foundation, or financial institution. We do not hold, manage, or
            control charitable funds. All donation processing is handled through
            Stripe, our third-party payment processor.
          </P>

          <SectionTitle>2. Eligibility</SectionTitle>
          <P>To use the Platform you must:</P>
          <List
            items={[
              'Be at least 13 years of age',
              'If you are between 13 and 17 years of age, have obtained verifiable parental or guardian consent',
              'Have the legal capacity to enter into a binding agreement',
              'Not be prohibited from using the Platform under applicable law',
            ]}
          />
          <P>
            By creating an account, you represent and warrant that you meet
            these requirements.
          </P>

          <SectionTitle>3. Account Registration</SectionTitle>
          <SubSectionTitle>3.1 Organizations</SubSectionTitle>
          <P>
            To register an Organization account, you must provide accurate
            information about your organization including its legal name,
            registration status, and authorized representative details. You
            represent that you are authorized to bind the Organization to these
            Terms. Organizations that wish to issue U.S. charitable donation
            receipts must confirm their tax-exempt status, including recognition
            under Section 501(c)(3) where applicable, and provide their Employer
            Identification Number (EIN) during onboarding.
          </P>

          <SubSectionTitle>3.2 Donors</SubSectionTitle>
          <P>
            Donor accounts may be created directly or through the donation flow.
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activity that occurs under your
            account.
          </P>

          <SubSectionTitle>3.3 Account accuracy</SubSectionTitle>
          <P>
            You agree to provide accurate, current, and complete information
            during registration and to update your information to keep it
            accurate. We reserve the right to suspend or terminate accounts
            where information is found to be inaccurate, misleading, or
            incomplete.
          </P>

          <SectionTitle>4. The Platform — What We Provide</SectionTitle>
          <P>Cotara provides:</P>
          <List
            items={[
              'Tools for Organizations to create and manage fundraising campaigns',
              'Donor engagement features including impact reporting, behavioral analytics, and community features',
              'A donation processing interface powered by Stripe',
              'Automated tax receipt generation for eligible donations to registered charities',
              'Analytics and engagement intelligence for Organizations',
            ]}
          />
          <P>Cotara does not:</P>
          <List
            items={[
              'Hold, custody, or manage charitable funds at any point',
              'Guarantee fundraising outcomes or donation amounts',
              'Provide legal, financial, or tax advice',
              'Verify the programmatic activities or outcomes of Organizations beyond their registered charity status where applicable',
            ]}
          />

          <SectionTitle>5. Donations</SectionTitle>
          <SubSectionTitle>5.1 Processing</SubSectionTitle>
          <P>
            All donations are processed by Stripe. By making a donation through
            the Platform, you agree to Stripe&apos;s Terms of Service available
            at{' '}
            <a
              href='https://stripe.com/legal'
              className='text-[#171717] underline underline-offset-2'
            >
              stripe.com/legal
            </a>
            . Cotara does not store payment card information.
          </P>

          <SubSectionTitle>5.2 Non-custodial model</SubSectionTitle>
          <P>
            Cotara operates a non-custodial model. Donated funds are transmitted
            directly through Stripe&apos;s infrastructure to the
            Organization&apos;s designated bank account. Coterie does not hold
            donor funds at any stage.
          </P>

          <SubSectionTitle>5.3 Fees</SubSectionTitle>
          <P>
            Cotara charges a platform fee on donations processed through the
            Platform. The current fee structure is displayed at the time of
            donation. Coterie reserves the right to update its fee structure
            with 30 days&apos; notice to Organizations.
          </P>

          <SubSectionTitle>5.4 Refunds</SubSectionTitle>
          <P>
            Donations are generally non-refundable once processed, as they are
            transmitted to the recipient Organization. If you believe a donation
            was made in error, contact us at support@usecotara.com within 48
            hours. We will work with the Organization to facilitate a resolution
            where possible, but we cannot guarantee refunds. Cotara is not
            liable for the Organization&apos;s decisions regarding refund
            requests.
          </P>

          <SubSectionTitle>5.5 Tax receipts</SubSectionTitle>
          <P>
            Where an Organization is a qualified U.S. tax-exempt charitable
            organization and has enabled charitable receipt generation on the
            Platform, eligible donations may generate a written acknowledgment
            or donation receipt. The Organization is solely responsible for
            confirming that its tax-exempt status is current, that donations
            qualify for acknowledgment or substantiation under applicable IRS
            rules, and that any required goods-or-services disclosures are
            accurate. Cotara provides receipt generation as a technical service
            and does not determine or guarantee the tax deductibility of any
            donation.
          </P>

          <SectionTitle>6. Obligations of Organizations</SectionTitle>
          <P>By registering as an Organization, you agree to:</P>
          <List
            items={[
              'Provide accurate information about your organization, mission, and campaigns',
              'Use donations for the purposes described in your campaigns',
              'Comply with all applicable federal, state, and local laws, rules, and regulations, including charitable solicitation and fundraising registration requirements, IRS rules applicable to tax-exempt organizations and charitable contribution acknowledgments, privacy and data protection laws, anti-money laundering and FinCEN obligations where applicable, and electronic communications laws including the CAN-SPAM Act.',
              "Not use the Platform to misrepresent your organization's status, activities, or use of funds",
              'Not conduct fraudulent campaigns or misappropriate donated funds',
              'Respond to donor inquiries in a timely manner',
              'Maintain an active and valid bank account for fund disbursement',
              'Notify Cotara immediately if your charitable registration status changes',
            ]}
          />
          <P>
            Cotara reserves the right to suspend or terminate any Organization
            account where there is reasonable suspicion of fraud,
            misrepresentation, or misuse of funds.
          </P>

          <SectionTitle>7. Obligations of Donors</SectionTitle>
          <P>By using the Platform to make donations, you agree to:</P>
          <List
            items={[
              'Make donations only with funds you are legally authorized to use',
              'Not use the Platform to launder money, evade taxes, or conduct any illegal activity',
              'Provide accurate information in connection with your donation',
              'Not attempt to circumvent Platform fees or payment processing systems',
            ]}
          />

          <SectionTitle>8. Prohibited Uses</SectionTitle>
          <P>You agree not to use the Platform to:</P>
          <List
            items={[
              'Violate any applicable law or regulation',
              'Impersonate any person or organization',
              'Upload or transmit content that is defamatory, fraudulent, harassing, obscene, or otherwise objectionable',
              'Collect or harvest personal information of other users without consent',
              'Introduce viruses, malware, or other harmful code',
              "Interfere with the Platform's infrastructure or security",
              'Scrape, crawl, or extract data from the Platform without our written permission',
              'Use the Platform for any commercial purpose other than the fundraising activities expressly permitted under these Terms',
            ]}
          />

          <SectionTitle>9. Content</SectionTitle>
          <SubSectionTitle>9.1 Organization content</SubSectionTitle>
          <P>
            Organizations are solely responsible for all campaign content,
            images, descriptions, and materials they upload to the Platform. By
            uploading content, you represent that you have all necessary rights
            to that content and that it does not infringe any third-party
            rights.
          </P>

          <SubSectionTitle>9.2 License to Cotara</SubSectionTitle>
          <P>
            By uploading content to the Platform, you grant Cotara a
            non-exclusive, royalty-free, worldwide license to use, display,
            reproduce, and distribute that content solely for the purpose of
            operating and promoting the Platform. This license ends when you
            remove the content or close your account, except where content has
            been shared publicly and reproduced by others.
          </P>

          <SubSectionTitle>9.3 Content removal</SubSectionTitle>
          <P>
            Cotara reserves the right to remove any content that violates these
            Terms or that we determine, in our sole discretion, to be harmful,
            misleading, or inappropriate.
          </P>

          <SectionTitle>10. Intellectual Property</SectionTitle>
          <SubSectionTitle>10.1 Coterie&apos;s IP</SubSectionTitle>
          <P>
            The Platform, including its software, design, features, and content
            created by Coterie, is owned by Coterie Financial Technology Limited
            and is protected by Canadian and international intellectual property
            laws. The Ripple Engine, its algorithms, behavioral modeling
            systems, and related technology are proprietary to Coterie. You are
            granted a limited, non-exclusive, non-transferable license to use
            the Platform for its intended purposes. You may not copy, modify,
            reverse engineer, decompile, or create derivative works based on the
            Platform or its technology.
          </P>

          <SubSectionTitle>10.2 Feedback</SubSectionTitle>
          <P>
            If you provide feedback, suggestions, or ideas regarding the
            Platform, you grant Cotara the right to use that feedback without
            restriction or compensation to you.
          </P>

          <SectionTitle>11. Privacy</SectionTitle>
          <P>
            Your use of the Platform is also governed by our Privacy Policy,
            which is incorporated into these Terms by reference. By using the
            Platform, you consent to the collection, use, and disclosure of your
            personal information as described in the Privacy Policy.
          </P>

          <SectionTitle>12. Fees and Payments</SectionTitle>
          <SubSectionTitle>12.1 Organization subscriptions</SubSectionTitle>
          <P>
            Organizations access the Platform through subscription plans.
            Current pricing is available at{' '}
            <a
              href='https://usecoterie.com/pricing'
              className='text-[#171717] underline underline-offset-2'
            >
              usecoterie.com/pricing
            </a>
            . Subscriptions are billed in advance on a monthly or annual basis
            depending on the plan selected.
          </P>

          <SubSectionTitle>12.2 Failed payments</SubSectionTitle>
          <P>
            If a subscription payment fails, we will notify you and attempt to
            process the payment again. Continued failure to pay may result in
            suspension of your Organization account and associated campaigns.
          </P>

          <SubSectionTitle>12.3 Cancellation and refunds</SubSectionTitle>
          <P>
            You may cancel your subscription at any time. Cancellation takes
            effect at the end of the current billing period. We do not provide
            prorated refunds for unused subscription periods, except where
            required by applicable law.
          </P>

          <SubSectionTitle>12.4 Price changes</SubSectionTitle>
          <P>
            We may change subscription pricing with 30 days&apos; written notice
            to Organization account holders. Continued use of the Platform after
            the notice period constitutes acceptance of the new pricing.
          </P>

          <SectionTitle>13. Disclaimers</SectionTitle>
          <P>
            The Platform is provided &quot;as is&quot; and &quot;as
            available.&quot; To the maximum extent permitted by applicable law,
            Cotara disclaims all warranties, express or implied, including
            warranties of merchantability, fitness for a particular purpose, and
            non-infringement.
          </P>
          <P>Coterie does not warrant that:</P>
          <List
            items={[
              'The Platform will be uninterrupted, error-free, or free of viruses or harmful components',
              'The results obtained from using the Platform will be accurate or reliable',
              'Any errors in the Platform will be corrected',
            ]}
          />
          <P>
            Coterie does not endorse any Organization, campaign, or cause listed
            on the Platform and makes no representation about the effectiveness,
            legitimacy, or financial management of any Organization.
          </P>

          <SectionTitle>14. Limitation of Liability</SectionTitle>
          <P>
            To the maximum extent permitted by applicable law, Cotara&apos;s
            total aggregate liability for any claim arising from or related to
            these Terms, the Platform, or any services provided by Cotara shall
            not exceed the greater of:
          </P>
          <List
            items={[
              'the subscription or service fees paid directly by you to Cotara in the twelve (12) months preceding the event giving rise to the claim, excluding donations, donor contributions, payment-processing amounts, third-party fees, taxes, or funds processed by third-party payment providers; or',
              'one hundred U.S. dollars (US $100).',
            ]}
          />
          <P>
            Cotara shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including loss of revenue, loss
            of data, or loss of goodwill, even if Cotara has been advised of the
            possibility of such damages.
          </P>
          <P>
            Some jurisdictions do not allow the exclusion or limitation of
            certain damages. In such jurisdictions, the above limitations apply
            to the fullest extent permitted by law.
          </P>

          <SectionTitle>15. Indemnification</SectionTitle>
          <P>
            You agree to indemnify, defend, and hold harmless Coterie and its
            officers, directors, employees, and agents from any claims,
            liabilities, damages, losses, and expenses, including reasonable
            legal fees, arising from:
          </P>
          <List
            items={[
              'Your use of the Platform',
              'Your violation of these Terms',
              'Your content or campaigns',
              'Your violation of any third-party rights',
              'Any misappropriation of donated funds',
            ]}
          />

          <SectionTitle>16. Third-Party Services</SectionTitle>
          <P>
            The Platform integrates with Stripe for payment processing. Your use
            of Stripe&apos;s services is subject to Stripe&apos;s own Terms of
            Service and Privacy Policy. Cotara is not responsible for the
            availability, accuracy, or practices of Stripe or any other
            third-party service.
          </P>

          <SectionTitle>17. Suspension and Termination</SectionTitle>
          <SubSectionTitle>17.1 By you</SubSectionTitle>
          <P>
            You may close your account at any time by contacting
            support@usecotara.com. Closing your account does not affect any
            obligations arising before closure, including outstanding
            subscription fees.
          </P>

          <SubSectionTitle>17.2 By Cotara</SubSectionTitle>
          <P>
            We reserve the right to suspend or terminate your account, with or
            without notice, if:
          </P>
          <List
            items={[
              'You breach these Terms',
              'We suspect fraudulent, illegal, or harmful activity',
              'We are required to do so by law or court order',
              'You have not used the Platform for 24 consecutive months',
            ]}
          />
          <P>
            Upon termination, your right to use the Platform ceases immediately.
            We will retain your data as required by our Privacy Policy and
            applicable law.
          </P>

          <SectionTitle>18. Governing Law and Dispute Resolution</SectionTitle>
          <P>
            These Terms are governed by the laws of the State of Texas and the
            federal laws of the United States, without regard to conflict of law
            principles.
          </P>
          <P>
            Any dispute arising from or relating to these Terms or your use of
            the Platform shall first be subject to good-faith negotiation
            between the parties. If the parties are unable to resolve the
            dispute through negotiation, the dispute shall be resolved by
            binding arbitration administered by the American Arbitration
            Association under its Commercial Arbitration Rules, with proceedings
            conducted in English in Dallas County, Texas, unless the parties
            agree otherwise. The arbitration shall be governed by the Federal
            Arbitration Act to the extent applicable.
          </P>
          <P>
            Nothing in this section prevents either party from seeking urgent
            injunctive or equitable relief from a court of competent
            jurisdiction.
          </P>

          <SectionTitle>19. Changes to These Terms</SectionTitle>
          <P>
            We may update these Terms from time to time. We will notify you of
            material changes by email and by posting the updated Terms on the
            Platform. The date at the top of this document indicates when these
            Terms were last updated. Your continued use of the Platform after
            changes are posted constitutes your acceptance.
          </P>

          <SectionTitle>20. General</SectionTitle>
          <P>
            <span className='font-semibold text-[#171717]'>
              Entire agreement:
            </span>{' '}
            These Terms, together with the Privacy Policy, constitute the entire
            agreement between you and Coterie regarding the Platform and
            supersede all prior agreements.
          </P>
          <P>
            <span className='font-semibold text-[#171717]'>Severability:</span>{' '}
            If any provision of these Terms is found to be unenforceable, the
            remaining provisions will continue in full force.
          </P>
          <P>
            <span className='font-semibold text-[#171717]'>Waiver:</span>{' '}
            Cotara&apos;s failure to enforce any provision of these Terms does
            not constitute a waiver of that provision.
          </P>
          <P>
            <span className='font-semibold text-[#171717]'>Assignment:</span>{' '}
            You may not assign your rights or obligations under these Terms
            without our prior written consent. Cotara may assign these Terms in
            connection with a merger, acquisition, or sale of assets.
          </P>
          <P>
            <span className='font-semibold text-[#171717]'>Language:</span>{' '}
            These Terms are written in English.
          </P>

          <SectionTitle>21. Contact</SectionTitle>
          <div className='mt-4 space-y-0 text-base leading-6 text-[#73777F]'>
            <p>11450 U.S. 380, Suite 130</p>
            <p>Cross Roads, TX 76227</p>
            <p>United States</p>
            <p className='mt-4'>
              Email:{' '}
              <a
                href='mailto:legal@usecotara.com'
                className='text-[#171717] underline underline-offset-2'
              >
                legal@usecotara.com
              </a>
            </p>
          </div>
        </article>
      </section>
    </>
  )
}

export default TermsAndConditionIndex
