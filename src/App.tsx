import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavbarIndex from './sections/navbar'
import HomeIndex from './sections/home'
import PricingIndex from './sections/pricing'
import TermsAndConditionIndex from './sections/terms-and-condition'
import CaseStudyIndex from './sections/case-study'
import CaseStudyDetailIndex from './sections/case-study/detail'
import FooterIndex from './sections/footer'

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarIndex />
      <main>{children}</main>
      <FooterIndex />
    </>
  )
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className='px-4 py-24 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl text-center'>
        <h1 className='text-3xl font-medium text-[#171717]'>{title}</h1>
        <p className='mt-3 text-base text-[#73777F]'>Coming soon.</p>
      </div>
    </section>
  )
}

function App() {
  return (
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
              <PlaceholderPage title='Privacy Policy' />
            </AppLayout>
          }
        />
        <Route
          path='/communities'
          element={
            <AppLayout>
              <PlaceholderPage title='Communities' />
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
  )
}

export default App
