import { createBrowserRouter, Outlet } from 'react-router-dom'
import App from '../App'
import SideBar from '../components/sideBar'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
