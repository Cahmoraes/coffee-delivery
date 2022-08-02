import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layout/DefaultLayout'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { OrderDetails } from '../pages/OrderDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/coffee-delivery/" element={<DefaultLayout />}>
        <Route path="/coffee-delivery/" element={<Home />} />
        <Route path="/coffee-delivery/checkout" element={<Checkout />} />
        <Route
          path="/coffee-delivery/order-details"
          element={<OrderDetails />}
        />
      </Route>
    </Routes>
  )
}
