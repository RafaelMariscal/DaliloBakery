import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Succeed } from './Pages/Checkout'
import Confirmation from './Pages/Checkout/Succeed'
import NotFound from './Pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/checkout' element={<Succeed />} />
      <Route path='/succeed' element={<Confirmation />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}