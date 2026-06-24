import { Navigate, useParams } from 'react-router-dom'

import { CaseStudyDetailPage } from './components'
import { getCaseStudyBySlug } from './data'

const CaseStudyDetailIndex = () => {
  const { slug } = useParams()
  const study = slug ? getCaseStudyBySlug(slug) : undefined

  if (!study) {
    return <Navigate to='/case-study' replace />
  }

  return <CaseStudyDetailPage study={study} />
}

export default CaseStudyDetailIndex
