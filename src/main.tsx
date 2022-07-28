import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { CartProvider } from './hooks/useCart'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <App />
      <ToastContainer />
    </CartProvider>
  </React.StrictMode>
)