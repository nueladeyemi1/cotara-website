export type CaseStudy = {
  slug: string
  title: string
  cardDescription: string
  image: string
  accent: string
  cardRadiusClass: string
  spanClassName?: string
  date: string
  author: string
  readTime: string
  introBold: string
  intro: string
  situation: CaseStudySection
  revealed: {
    title: string
    paragraphs?: string[]
    bullets?: string[]
    closing?: string[]
  }
  insights: CaseStudySection
  changed: CaseStudySection
  helpedThemSee: {
    title: string
    bullets: string[]
  }
}

export type CaseStudySection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  nestedBullets?: {
    intro: string
    items: string[]
  }
  closing?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'the-50-donor-who-moved-15400',
    title: 'The $50 Donor Who Moved $15,400',
    cardDescription:
      'Cotara Helps Nonprofits Find The Supporters Who Activate Others; Not Just The People Who Give The Most.',
    image: '/case-study-img-1.png',
    accent: '#2F9E7C',
    cardRadiusClass: 'rounded-[18.11px] rounded-tr-[108.65px]',
    date: 'November 2025',
    author: 'Wale Abba',
    readTime: '5mins Read',
    introBold: 'The biggest donor was not the biggest mover.',
    intro:
      'Cotara helps nonprofits find the supporters who activate others — not just the people who give the most.',
    situation: {
      title: 'The Situation',
      paragraphs: [
        'A nonprofit ran a fundraising campaign and focused on the top donors on the leaderboard.',
        'The team celebrated the largest gifts, sent personal thank-you notes to high-dollar supporters, and planned their next campaign around the same major donor list.',
        'But when the next campaign launched, results were flat. Several large donors did not return. Peer referrals dropped. The team could not explain why momentum had slowed.',
      ],
    },
    revealed: {
      title: 'What Cotara Revealed',
      bullets: [
        'Cotara analyzed campaign activity across donations, invitations, peer referrals, and supporter engagement.',
        'The nonprofit discovered that one supporter, John, gave only $50 directly — but invited 50 people into the campaign.',
        'Of those 50, 20 became donors and several gave larger gifts.',
        'Together, they contributed $15,400.',
        'John was not the largest donor.',
        'He was the hidden influencer.',
      ],
    },
    insights: {
      title: 'Cotara Insights',
      paragraphs: [
        'The organization had been rewarding the wrong signal. One donor gave $10,000. Another gave $50 and activated a network.',
        'Without visibility into influence, the team treated both supporters the same — and missed the person driving real growth.',
      ],
    },
    changed: {
      title: 'What Changed',
      paragraphs: [
        'The nonprofit created ambassador groups for supporters who invite others, not just those who give the most.',
        'They recognized hidden influencers publicly, tracked referral impact over time, and designed follow-up around community activation — not just gift size.',
      ],
    },
    helpedThemSee: {
      title: 'What Cotara Helped Them See',
      bullets: [
        'Who invited others',
        'Who converted new donors',
        'Which supporters were under-recognized',
        'Where peer influence was driving growth',
        'Which relationships deserved deeper investment',
      ],
    },
  },
  {
    slug: 'the-volunteer-who-was-more-than-a-volunteer',
    title: 'The Volunteer Who Was More Than a Volunteer',
    cardDescription:
      'Cotara Connects Donors, Volunteers, Members, Visitors, Event Attendees, And Ambassadors Into One Clear Supporter View.',
    image: '/case-study-img-2.png',
    accent: '#F5C518',
    cardRadiusClass: 'rounded-[18.11px]',
    date: 'November 2025',
    author: 'Wale Abba',
    readTime: '5mins Read',
    introBold: 'A supporter is not one role. A supporter is a relationship.',
    intro:
      'Cotara connects donors, volunteers, members, visitors, event attendees, and ambassadors into one clear supporter view.',
    situation: {
      title: 'The Situation',
      bullets: [
        'A nature center had separate lists for donors, volunteers, members, and event attendees.',
        'The same person could appear in multiple systems without being connected.',
        'Volunteer hours lived in one spreadsheet. Donations lived in another. Event check-ins lived in a third.',
        'Staff could not see when a volunteer was also a donor — or when a member had stopped attending events.',
        'Supporter outreach was fragmented. Volunteers got volunteer emails. Donors got donation appeals. Members got renewal reminders.',
        'No one had a full picture of who each supporter actually was.',
        'High-value community members were invisible because their impact was spread across disconnected records.',
        'The organization was managing lists, not relationships.',
      ],
    },
    revealed: {
      title: 'What Cotara Revealed',
      paragraphs: [
        'Cotara combined activity across donations, volunteering, events, and membership into Supporter 360 profiles.',
        'One supporter, Maria, appeared in multiple places:',
      ],
      bullets: [
        'Volunteered 14 hours',
        'Attended 3 community events',
        'Donated twice',
        'Renewed membership early',
        'Invited two friends to an event',
      ],
      closing: [
        'Before Cotara, Maria looked like a low-value donor.',
        'After Cotara, she became visible as a high-value community supporter.',
      ],
    },
    insights: {
      title: 'Cotara Insights',
      paragraphs: [
        'Maria was not just a volunteer. She was not just a donor. She was a connector, a repeat participant, and a community advocate.',
        'The organization had been under-investing in one of its strongest relationships because the data was fragmented.',
      ],
    },
    changed: {
      title: 'What Changed',
      bullets: [
        'The organization stopped sending every supporter the same message.',
        'Volunteers who also donated received recognition that reflected their full contribution.',
        'Event attendees with high engagement were invited into deeper community roles.',
        'Staff could finally see who was growing the community — not just who gave money.',
      ],
      closing:
        'Cotara helped the organization move from generic fundraising to relationship-based growth.',
    },
    helpedThemSee: {
      title: 'What Cotara Helped Them See',
      bullets: [
        'Who supporters are beyond donations',
        'Which members are at risk of lapsing',
        'Which volunteers are also donors',
        'Which event attendees are ready for deeper engagement',
        'Where community relationships were being under-recognized',
        'How to design outreach based on full supporter behavior',
      ],
    },
  },
  {
    slug: 'the-campaign-that-raised-money-but-lost-momentum',
    title: 'The Campaign That Raised Money but Lost Momentum',
    cardDescription:
      'We Believe Education Is The Foundation Of Sustainable Change. And Making A Real Impact.',
    image: '/case-study-img-3.png',
    accent: '#4DA3FF',
    cardRadiusClass: 'rounded-[18.11px] rounded-tl-[108.65px]',
    date: 'November 2025',
    author: 'Wale Abba',
    readTime: '5mins Read',
    introBold: 'A successful campaign can still leak future giving.',
    intro:
      'Cotara helps nonprofits see what happens after the donation — who returns, who goes silent, and what follow-up builds trust.',
    situation: {
      title: 'The Situation',
      bullets: [
        'A nonprofit ran a strong year-end campaign and exceeded its fundraising goal.',
        'The team celebrated the result and moved on to the next initiative.',
        'But three months later, repeat giving was lower than expected.',
        'The team knew how much money came in, but they did not know:',
      ],
      nestedBullets: {
        intro: '',
        items: [
          'Which new donors came back',
          'Which one-time donors went silent',
          'Which supporters needed a thank-you follow-up',
          'Which messages built trust after the campaign',
          'Which relationships were at risk of lapsing',
        ],
      },
      closing:
        'The campaign looked successful in the short term but weak in relationship growth.',
    },
    revealed: {
      title: 'What Cotara Revealed',
      bullets: [
        'Cotara tracked post-campaign behavior across donations, email engagement, and repeat giving.',
        'Several first-time donors never received a meaningful follow-up.',
        'High-intent supporters went quiet after the campaign ended.',
        'The organization had strong acquisition but weak retention signals.',
      ],
    },
    insights: {
      title: 'Cotara Insights',
      paragraphs: [
        'The campaign did not have a donation problem.',
        'It had a trust and retention gap.',
      ],
    },
    changed: {
      title: 'What Changed',
      paragraphs: [
        'The nonprofit created a 30-day post-campaign follow-up plan.',
      ],
      nestedBullets: {
        intro: 'Cotara helped segment supporters into:',
        items: [
          'New donors who needed a thank-you',
          'Repeat donors ready for a deeper ask',
          'One-time donors at risk of lapsing',
          'High-engagement supporters ready for community roles',
          'Ambassadors who could invite others into the next campaign',
        ],
      },
      closing:
        'The next campaign was designed not just to raise money, but to grow long-term generosity.',
    },
    helpedThemSee: {
      title: 'What Cotara Helped Them See',
      bullets: [
        'Which donors returned after the campaign',
        'Which supporters went silent',
        'Which follow-up messages built trust',
        'Where retention was breaking down',
        'How to design the next campaign for long-term growth',
      ],
    },
  },
]

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
