import { Navigate, useParams } from 'react-router-dom'

import { CaseStudyDetailPage } from './components'
import { getCaseStudyBySlug } from './data'
import { Seo } from '@/components/seo'

const CaseStudyDetailIndex = () => {
  const { slug } = useParams()
  const study = slug ? getCaseStudyBySlug(slug) : undefined

  if (!study) {
    return <Navigate to='/case-study' replace />
  }

  return (
    <>
      <Seo
        title={study.title}
        description={study.cardDescription}
        image={study.image}
        type='article'
        canonicalPath={`/case-study/${study.slug}`}
      />
      <CaseStudyDetailPage study={study} />
    </>
  )
}

export default CaseStudyDetailIndex
