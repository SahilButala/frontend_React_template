import React from 'react'
import { Outlet } from 'react-router-dom'

const publicRoutes = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default publicRoutes