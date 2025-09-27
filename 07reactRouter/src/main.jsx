import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfo } from './components/Github/GitHub.jsx'

// const router = createBrowserRouter([
// {
//   path:"/",
//   element :<Layout />,
//   children: [
//     {
//       index:true,
//       element:<Home />
//     },
//     {
//       path:"about",
//       element:<About />
//     },
//     {
//       path:"contact",
//       element:<Contact />
//     }
//   ]
// }]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route
       loader={githubInfo}
       path='github'
       element={<Github />}
        />
      <Route path='*' element={<div className='text-center text-3xl font-bold mt-20'>404 Page Not Found</div>} />
    </Route>
))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
