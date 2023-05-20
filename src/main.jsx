import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AllToys from './components/allToys/AllToys.jsx'
import Blog from './components/Blog.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './components/layout/Home/Home.jsx'
import HomeLayout from './components/layout/Home/HomeLayout.jsx'
import Login from './components/shared/login/Login.jsx'
import AuthProvider from './components/provider/AuthProvider.jsx'
import Register from './components/register/Register.jsx'
import './index.css'
import AddToy from './components/AddToys/AddToy.jsx'
import MyToys from './components/myToy/MyToys.jsx'
import SingleToy from './components/allToys/SingleToy.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>
      },
      {
        path: 'allToys/:id',
        element: <SingleToy></SingleToy>,
        loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)
      },
      {
        path: 'addToy',
        element: <AddToy></AddToy>
      },
      {
        path: 'myToys',
        element: <MyToys></MyToys>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
