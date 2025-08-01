import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
      {/* <Login/>
      <Browse/> */}
    </div>
  )
}

export default Body
