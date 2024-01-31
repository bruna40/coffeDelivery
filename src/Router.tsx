import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Sucess } from './pages/Sucess'
import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="order/:orderId/sucess" element={<Sucess />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}
