import { createBrowserRouter, Outlet } from 'react-router-dom'

import SideBar from '../components/sideBar'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Root from '../Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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

export default router
