import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Checkout } from './Pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  )
}