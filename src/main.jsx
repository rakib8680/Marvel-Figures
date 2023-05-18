import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './components/layout/Home/HomeLayout.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
