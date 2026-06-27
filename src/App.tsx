import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarIndex />
      <main>{children}</main>
      <FooterIndex />
    </>
  )
}


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <AppLayout>
              <HomeIndex />
            </AppLayout>
          }
        />
        <Route
          path='/pricing'
          element={
            <AppLayout>
              <PricingIndex />
            </AppLayout>
          }
        />
        <Route
          path='/terms-and-conditions'
          element={
            <AppLayout>
              <TermsAndConditionIndex />
            </AppLayout>
          }
        />
        <Route
          path='/privacy-policy'
          element={
            <AppLayout>
              <PolicyIndex />
            </AppLayout>
          }
        />
        <Route
          path='/communities'
          element={
            <AppLayout>
              <CommunityIndex />
            </AppLayout>
          }
        />
        <Route
          path='/communities/:slug'
          element={
            <AppLayout>
              <CommunityDetailIndex />
            </AppLayout>
          }
        />
        <Route
          path='/case-study'
          element={
            <AppLayout>
              <CaseStudyIndex />
            </AppLayout>
          }
        />
        <Route
          path='/case-study/:slug'
          element={
            <AppLayout>
              <CaseStudyDetailIndex />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
