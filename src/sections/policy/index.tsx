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
    <ul className='mt-2 list-disc space-y-2 pl-5 text-base leading-6 text-[#73777F]'>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

const PolicyIndex = () => {
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

      <div className='relative mx-auto max-w-[526px] px-4 pt-16 text-center sm:px-6 sm:pt-20 lg:px-0 lg:pt-24'>
        <div className='mb-5 flex items-center gap-2 border border-[#F2F2F2] px-[15px] py-[5px] rounded-full text-sm font-medium text-[#099557] w-max mx-auto uppercase'>
          Privacy policy
          <ArrowRightIcon className='w-3 h-3' />
        </div>
        <h1 className='text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl lg:text-[52px] lg:leading-[54px] lg:tracking-[-2.44px]'>
          How we protect your information
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
        <SectionTitle>1. Who We Are</SectionTitle>
        <P>
          Cotara Technology LLC ("Coterie," "we," "us," or "our") is a federally
          incorporated Canadian corporation headquartered in 11450 U.S. 380,
          Suite 130, Cross Roads, TX 76227, United States. We operate a donor
          engagement and fundraising platform available at usecoterie.com and
          through our mobile application (collectively, the "Platform").
        </P>
        <P>
          We are committed to protecting the personal information of everyone who
          uses our Platform. This Privacy Policy explains what information we
          collect, how we use it, and your rights regarding that information. If
          you have questions about this policy, contact us at:
          legal@usecotara.com
        </P>

        <SectionTitle>2. Applicable Law</SectionTitle>
        <P>
          Cotara is a U.S.-based platform and is designed to comply with
          applicable U.S. federal, state, and local laws where they apply,
          including laws governing privacy, data protection, charitable
          solicitation, donation acknowledgments, electronic communications, and
          nonprofit operations.
        </P>
        <P>
          Depending on the circumstances, applicable laws may include the Texas
          Data Privacy and Security Act, the California Consumer Privacy Act as
          amended, other U.S. state privacy laws, IRS rules for charitable
          organizations and donation acknowledgments, state fundraising and
          charitable solicitation requirements, and the CAN-SPAM Act.
        </P>
        <P>
          Where Cotara serves users or organizations outside the United States,
          additional privacy or data protection laws may apply, including the
          General Data Protection Regulation where applicable.
        </P>

        <SectionTitle>3. Who This Policy Applies To</SectionTitle>
        <P>This policy applies to:</P>
        <List
          items={[
            'Nonprofit organizations and their administrators who register and use the Platform ("Organizations")',
            'Individual donors who give through the Platform ("Donors")',
            'Visitors to our website',
          ]}
        />
        <P>
          <strong className='text-[#171717]'>Age requirement:</strong> You must
          be at least 13 years old to use the Platform. Users between the ages of
          13 and 17 must have verifiable parental or guardian consent before
          creating an account or submitting personal information.
        </P>
        <P>
          We do not knowingly collect personal information from children{' '}
          <strong className='text-[#171717]'>under 13</strong>. If we become
          aware that a child under 13 has provided personal information without
          verified parental consent, we will delete it promptly. If you believe a
          child under 13 has submitted information to us, contact us at
          legal@usecotara.com
        </P>

        <SectionTitle>4. Information We Collect</SectionTitle>

        <SubSectionTitle>4.1 Information You Provide Directly</SubSectionTitle>
        <P>
          <strong className='text-[#171717]'>From Organizations:</strong>
        </P>
        <List
          items={[
            'Organization name, registration number, and charitable status information',
            'Administrator name, email address, and contact details',
            'Banking and payout information (collected and processed exclusively by Stripe — Cotara does not store this directly)',
            'Campaign content, descriptions, and images you upload',
            'Communications you send to us',
          ]}
        />
        <P>
          <strong className='text-[#171717]'>From Donors:</strong>
        </P>
        <List
          items={[
            'Name and email address',
            'Donation history and amounts',
            'Profile information you choose to provide',
            'Communications and support requests',
          ]}
        />

        <SubSectionTitle>
          4.2 Information We Collect Automatically
        </SubSectionTitle>
        <P>When you use the Platform, we automatically collect:</P>
        <List
          items={[
            'Device type, operating system, and browser type',
            'IP address and approximate geographic location',
            'Pages visited, time spent, and navigation patterns',
            'Referring URLs',
            'Donation events, sharing events, and engagement interactions',
            'Session data and behavioral signals (used to power our engagement intelligence features)',
          ]}
        />

        <SubSectionTitle>4.3 Information From Third Parties</SubSectionTitle>
        <P>
          Stripe: When you make or receive a donation or payment through the
          Platform, Stripe processes the payment. Stripe may share transaction
          confirmation data with us, including transaction identifiers, payment
          status, payment amount, timestamp, and related metadata needed to
          confirm and reconcile the transaction. We do not receive or store full
          payment card details. Stripe's privacy policy is available at
          stripe.com/privacy.
        </P>
        <P>
          IRS tax-exempt organization data: We may use publicly available IRS
          tax-exempt organization data, including Tax Exempt Organization Search
          data, Publication 78 data, and Exempt Organizations Business Master
          File data, to verify and auto-populate organization profiles. This data
          is generally public organization-level information and is used to help
          confirm nonprofit status, tax-exempt classification, and donation
          eligibility indicators where available.
        </P>

        <SectionTitle>5. How We Use Your Information</SectionTitle>
        <P>We use the information we collect to:</P>
        <List
          items={[
            'Create and manage your account',
            'Process donations and issue tax receipts',
            'Provide, operate, and improve the Platform',
            'Power donor engagement features, including influence scoring and behavioral analytics that help organizations understand their donor communities',
            'Send transactional communications (donation confirmations, receipts, account notices)',
            'Send platform updates, product announcements, and service communications',
            'Send marketing communications where you have consented under CASL',
            'Detect and prevent fraud, abuse, and security incidents',
            'Comply with legal obligations',
            'Respond to support requests',
          ]}
        />
        <P>
          We do not sell your personal information to third parties. We do not
          use your personal information to serve you advertisements from
          third-party advertisers.
        </P>

        <SectionTitle>
          6. Behavioral Data and Engagement Intelligence
        </SectionTitle>
        <P>
          The Cotara Platform includes features that analyze donor behavior —
          including giving patterns, referral activity, content engagement, and
          network influence — to generate engagement insights for Organizations.
        </P>
        <P>What this means for Donors:</P>
        <List
          items={[
            'We analyze how you interact with campaigns, content, and the Platform to help Organizations understand what drives donor engagement',
            'We generate influence scores and engagement metrics derived from your activity',
            'This data is shared with the Organization you donated to in aggregated and anonymized forms where possible',
            'Individual behavioral insights may be shared with the specific Organization you have a relationship with, to help them communicate more effectively with you',
            'We do not sell this behavioral data to third parties',
            'You may opt out of behavioral profiling at any time through your account settings — doing so will not affect your ability to make donations',
          ]}
        />

        <SectionTitle>7. How We Share Your Information</SectionTitle>
        <P>
          We do not sell your personal information. We share it only in the
          following circumstances:
        </P>
        <P>
          With Organizations: When you donate to or engage with an Organization
          on the Platform, we share your name, email, donation history, and
          engagement data with that Organization. This sharing is necessary to
          fulfill the donation relationship and provide you with receipts and
          impact updates.
        </P>
        <P>
          With service providers: We use Stripe to process payments. Stripe acts
          as our payment processor and handles all financial transaction data
          under their own privacy policy and PCI DSS compliance standards. For
          legal compliance: We may disclose your information if required by law,
          court order, or governmental authority, or where we believe disclosure
          is necessary to protect our rights, protect your safety or the safety
          of others, or investigate fraud.
        </P>
        <P>
          In a business transfer: If Cotara is involved in a merger, acquisition,
          or sale of assets, your information may be transferred as part of that
          transaction. We will notify you via email and/or prominent notice on
          our Platform of any such change in ownership and your choices regarding
          your information.
        </P>
        <P>
          With your consent: We may share information for any other purpose with
          your explicit consent.
        </P>

        <SectionTitle>8. Tax Receipts</SectionTitle>
        <P>
          Donations processed through the Platform may be eligible for U.S.
          charitable contribution acknowledgments or donation receipts where the
          Organization is a qualified tax-exempt charitable organization and has
          enabled receipt generation on the Platform.
        </P>
        <P>
          Where this feature is enabled, Cotara may generate a donation
          acknowledgment or receipt on behalf of the Organization. To do so, we
          may process information such as your name, email address, mailing
          address if provided, donation amount, donation date, transaction
          identifier, and related donation details. The Organization is
          responsible for determining whether a donation is tax-deductible,
          whether an acknowledgment is required, and whether any
          goods-or-services disclosure is accurate. Cotara provides receipt
          generation as a technical service and does not determine or guarantee
          the tax deductibility of any donation.
        </P>

        <SubSectionTitle>9. Data Retention</SubSectionTitle>
        <P>
          We retain personal information for as long as reasonably necessary to
          fulfill the purposes described in this Policy, provide the Platform,
          comply with legal, tax, accounting, contractual, and financial
          record-keeping obligations, resolve disputes, enforce agreements, and
          maintain security.
        </P>
        <P>Our general retention practices include:</P>
        <P>
          Account information: Retained for the duration of the account and for a
          reasonable period after account closure as needed for legal, tax,
          accounting, security, and business purposes.
        </P>
        <P>
          Donation and transaction records: Retained as needed to support
          donation acknowledgments, transaction reconciliation, fraud prevention,
          financial reporting, tax compliance, dispute resolution, and other
          applicable legal or accounting obligations.
        </P>
        <P>
          Behavioral and engagement data: Retained for as long as reasonably
          necessary to provide analytics, supporter intelligence, campaign
          insights, product improvement, security, and reporting. Where
          appropriate, Cotara may delete, aggregate, de-identify, or anonymize
          this data when it is no longer needed in identifiable form.
        </P>
        <P>
          Marketing preference and opt-out records: Retained as needed to honor
          communication preferences, unsubscribe requests, consent records where
          applicable, and electronic communications compliance obligations.
        </P>
        <P>
          You may request deletion of your personal information at any time,
          subject to applicable legal, tax, accounting, contractual, security,
          and operational retention requirements. Where we are required or
          permitted to retain certain information, we may retain only the
          information necessary for those purposes and will delete, de-identify,
          or anonymize it when it is no longer needed.
        </P>

        <SectionTitle>10. Data Security</SectionTitle>
        <P>
          We implement industry-standard technical and organizational security
          measures to protect your personal information, including:
        </P>
        <List
          items={[
            'Encryption of data in transit using TLS',
            'Encryption of sensitive data at rest',
            'Access controls limiting staff access to personal data on a need-to-know basis',
            'Two-factor authentication requirements for platform administrators',
            'Regular security reviews and monitoring',
          ]}
        />
        <P>
          Payment card data is never transmitted to or stored on Coterie's
          servers. All payment processing occurs on Stripe's PCI DSS-compliant
          infrastructure.
        </P>
        <P>
          No method of transmission over the internet or electronic storage is
          100% secure. While we strive to protect your information, we cannot
          guarantee absolute security. In the event of a data breach affecting
          your personal information, we will notify you as required under PIPEDA
          and applicable law.
        </P>

        <SectionTitle>11. Cookies and Tracking</SectionTitle>
        <P>
          We use cookies and similar technologies to operate the Platform,
          remember your preferences, analyze usage, and improve our services.
        </P>
        <P>Types of cookies we use:</P>
        <List
          items={[
            'Strictly necessary cookies: Required for the Platform to function. Cannot be disabled.',
            'Functional cookies: Remember your preferences and settings.',
            'Analytics cookies: Help us understand how the Platform is used so we can improve it. Data collected is aggregated and not used to identify you personally.',
          ]}
        />
        <P>
          We do not use advertising or third-party tracking cookies. You can
          control cookies through your browser settings. Disabling strictly
          necessary cookies may affect Platform functionality.
        </P>

        <SectionTitle>12. Your Rights</SectionTitle>
        <P>
          Under applicable U.S. privacy laws, and depending on your state of
          residence and your relationship with Cotara, you may have the right to:
        </P>
        <List
          items={[
            'Access the personal information we process about you',
            'Correct inaccurate or incomplete personal information',
            'Request deletion of personal information, subject to legal, tax, accounting, contractual, security, and operational retention requirements',
            'Receive a copy of certain personal information in a portable format, where technically feasible',
            'Opt out of marketing communications at any time',
            'Opt out of certain uses of personal information for targeted advertising, sale, sharing, or profiling where required by applicable law',
            'Appeal a decision we make regarding your privacy request, where applicable law provides that right',
          ]}
        />
        <P>
          To exercise any of these rights, contact us at{' '}
          <a
            href='mailto:privacy@usecotara.com'
            className='text-[#171717] underline'
          >
            privacy@usecotara.com
          </a>
          . We may need to verify your identity before processing your request.
        </P>
        <P>
          We will respond to privacy requests within the timeframe required by
          applicable law. Where permitted by law, we may extend the response
          period if reasonably necessary and will notify you of the extension. If
          you are unsatisfied with our response, you may have the right to
          contact your state attorney general or other applicable privacy
          regulator.
        </P>

        <SectionTitle>13. International Users</SectionTitle>
        <P>
          Cotara is a U.S.-based platform. Your information may be stored,
          transferred, and processed in the United States and in other
          jurisdictions where Cotara or its service providers maintain systems or
          personnel. If you access the Platform from outside the United States,
          your information may be transferred to and processed in a country that
          may have data protection laws different from those in your country of
          residence.
        </P>
        <P>
          By using the Platform or providing information to Cotara, you
          understand that your information may be transferred, stored, and
          processed in the United States and other applicable jurisdictions.
        </P>
        <P>
          For users in the European Economic Area, the United Kingdom, or
          Switzerland, where required, Cotara will rely on appropriate transfer
          mechanisms for international data transfers, such as applicable standard
          contractual clauses, adequacy decisions, or other lawful transfer
          mechanisms. Cotara does not represent that it participates in the
          EU-U.S. Data Privacy Framework unless expressly stated in a separate
          notice.
        </P>

        <SectionTitle>14. Changes to This Policy</SectionTitle>
        <P>
          We may update this Privacy Policy from time to time. We will notify you
          of material changes by posting the updated policy on our website and,
          where appropriate, by sending you an email notification. The date at
          the top of this policy indicates when it was last updated. Your
          continued use of the Platform after changes are posted constitutes your
          acceptance of the updated policy.
        </P>

        <SectionTitle>15. Contact</SectionTitle>
        <P>
          11450 U.S. 380, Suite 130
          <br />
          Cross Roads, TX 76227
          <br />
          United States
          <br />
          Email: legal@usecotara.com
        </P>
      </article>
    </section>
  )
}

export default PolicyIndex
