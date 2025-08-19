import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"

import './App.css'

import { AppLayout } from './components/layout/AppLayout'

import { Home } from './pages/home'
import { About } from './pages/about'
import { Contact } from './pages/contact'
import { Country } from './pages/country'
import { ErrorPage } from './pages/errorPage'
import { CountryDetails } from './components/layout/countryDetails'


const router = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <ErrorPage/>,
    children : [{
    path : "/",
    element : <Home/>,
  },
  {
    path : "about",
    element : <About/>,
  },
  {
    path : "contact",
    element : <Contact/>,
  },
  {
    path : "country",
    element : <Country/>,
  },
  {
    path : "country/:id",
    element : <CountryDetails/>,
  }

]

  }
])


const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
