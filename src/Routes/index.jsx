import { createBrowserRouter, Outlet } from 'react-router-dom'

import SideBar from '../components/sideBar'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Root from '../Root'
import Register from '../pages/Register'
import Login from '../pages/Login'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/user',
    element: (
      <>
        <SideBar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/user/home',
        element: <Home />,
      },
      {
        path: '/user/about',
        element: <About />,
      },
      {
        path: '/user/contact',
        element: <Contact />,
      },
    ],
  },
])

export default Router
