import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import LoadingSpinner from '../utils/loader'

const MainLayout = () => {
  return (
    <Suspense fallback={<LoadingSpinner/>}>

      <Outlet/>
    </Suspense>
  )
}

export default MainLayout