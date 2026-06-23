import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavbarIndex from './sections/navbar'
import PricingIndex from './sections/pricing'
import TermsAndConditionIndex from './sections/terms-and-condition'
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
