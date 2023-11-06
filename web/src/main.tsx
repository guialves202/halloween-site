import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Products } from './components/Products/index.tsx'
import { Categories } from './utils/types.tsx'
import { Product } from './components/Product/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: App()
  },
  {
    path: '/products/vassouras',
    element: Products(Categories.VASSOURA)
  },
  {
    path: '/products/caldeiroes',
    element: Products(Categories.CALDEIRAO)
  },
  {
    path: '/products/chapeus',
    element: Products(Categories.CHAPEU)
  },
  {
    path: '/products/aboboras',
    element: Products(Categories.ABOBORA)
  },
  {
    path: '/product/:productId',
    element: <Product />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
