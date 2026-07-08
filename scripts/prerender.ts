import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { caseStudies } from '../src/sections/case-study/data'

const currentDir = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(currentDir, '../dist')
const template = readFileSync(join(distDir, 'index.html'), 'utf-8')

const SITE_NAME = 'Cotara'
const SITE_URL = (
  process.env.VITE_SITE_URL || 'https://www.usecotara.com'
).replace(/\/$/, '')
const DEFAULT_DESCRIPTION =
  'Cotara helps nonprofits turn fragmented supporter data into clear intelligence about who gives, who returns, who invites others, and what actions grow support.'
const DEFAULT_OG_IMAGE = '/community.jpg'

type Route = {
  path: string
  title: string
  description?: string
  image?: string
  type?: 'website' | 'article'
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function upsertMeta(
  html: string,
  attr: 'name' | 'property',
  value: string,
  content: string,
): string {
  const tag = `<meta ${attr}="${value}" content="${escapeHtml(content)}" />`
  const regex = new RegExp(
    `<meta[^>]*\\b${attr}=["']${escapeRegExp(value)}["'][^>]*>`,
    'i',
  )
  if (regex.test(html)) return html.replace(regex, tag)
  return html.replace('</head>', `    ${tag}\n  </head>`)
}

function renderRoute(route: Route): string {
  const fullTitle = `${route.title} | ${SITE_NAME}`
  const description = route.description ?? DEFAULT_DESCRIPTION
  const image = route.image ?? DEFAULT_OG_IMAGE
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`
  const url = `${SITE_URL}${route.path}`
  const type = route.type ?? 'website'

  let html = template

  html = html.replace(
    /<title[^>]*>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(fullTitle)}</title>`,
  )

  html = upsertMeta(html, 'name', 'description', description)
  html = upsertMeta(html, 'property', 'og:type', type)
  html = upsertMeta(html, 'property', 'og:site_name', SITE_NAME)
  html = upsertMeta(html, 'property', 'og:title', fullTitle)
  html = upsertMeta(html, 'property', 'og:description', description)
  html = upsertMeta(html, 'property', 'og:url', url)
  html = upsertMeta(html, 'property', 'og:image', imageUrl)
  html = upsertMeta(html, 'name', 'twitter:card', 'summary_large_image')
  html = upsertMeta(html, 'name', 'twitter:title', fullTitle)
  html = upsertMeta(html, 'name', 'twitter:description', description)
  html = upsertMeta(html, 'name', 'twitter:image', imageUrl)

  const canonicalTag = `<link rel="canonical" href="${url}" />`
  if (/<link[^>]*\brel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(
      /<link[^>]*\brel=["']canonical["'][^>]*>/i,
      canonicalTag,
    )
  } else {
    html = html.replace('</head>', `    ${canonicalTag}\n  </head>`)
  }

  return html
}

function writeRoute(route: Route): void {
  const html = renderRoute(route)
  const outPath =
    route.path === '/'
      ? join(distDir, 'index.html')
      : join(distDir, route.path, 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html, 'utf-8')
  console.log(`prerendered ${route.path}`)
}

const routes: Route[] = [
  {
    path: '/',
    title: 'Nonprofit Supporter Intelligence',
    description:
      'Cotara helps nonprofits understand the hidden drivers of support — retention, influence, trust, community participation, and impact visibility.',
  },
  {
    path: '/pricing',
    title: 'Pricing',
    description:
      'Simple, transparent pricing for nonprofits — turn your supporter data into retention, influence, and community growth insights.',
  },
  {
    path: '/communities',
    title: 'Communities',
    description:
      'Search by organization, community, or cause. See how Cotara helps faith groups, diaspora nonprofits, alumni networks, and more grow support.',
  },
  {
    path: '/case-study',
    title: 'Use Case Stories',
    description:
      'Cotara does not just track donations. It reveals the hidden people, relationships, and actions that grow support. Read the case studies.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'Learn how Cotara collects, uses, and protects your data.',
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms & Conditions',
    description: 'Read the terms and conditions for using Cotara.',
  },
  ...caseStudies.map(
    (study): Route => ({
      path: `/case-study/${study.slug}`,
      title: study.title,
      description: study.cardDescription,
      image: study.image,
      type: 'article',
    }),
  ),
]

routes.forEach(writeRoute)

console.log(`\nPrerendered ${routes.length} routes for SEO.`)
