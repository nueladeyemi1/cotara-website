import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ScrollToTop } from './components/scroll-to-top'
import NavbarIndex from './sections/navbar'
import HomeIndex from './sections/home'
import PricingIndex from './sections/pricing'
import TermsAndConditionIndex from './sections/terms-and-condition'
import CaseStudyIndex from './sections/case-study'
import CaseStudyDetailIndex from './sections/case-study/detail'
import FooterIndex from './sections/footer'
import PolicyIndex from './sections/policy'
import CommunityIndex from './sections/community'
import CommunityDetailIndex from './sections/community/detail'

function AppLayout() {
  return (
    <>
      <NavbarIndex />
      <main>
        <Outlet />
      </main>
      <FooterIndex />
    </>
  )
}

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<HomeIndex />} />
            <Route path='/pricing' element={<PricingIndex />} />
            <Route
              path='/terms-and-conditions'
              element={<TermsAndConditionIndex />}
            />
            <Route path='/privacy-policy' element={<PolicyIndex />} />
            <Route path='/communities' element={<CommunityIndex />} />
            <Route
              path='/communities/:slug'
              element={<CommunityDetailIndex />}
            />
            <Route path='/case-study' element={<CaseStudyIndex />} />
            <Route
              path='/case-study/:slug'
              element={<CaseStudyDetailIndex />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
