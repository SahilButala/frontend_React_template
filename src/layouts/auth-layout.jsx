import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import LoadingSpinner from '../utils/loader'

const AuthLayout = () => {
  return (
    <Suspense fallback={<LoadingSpinner/>}> 
      <Outlet/>
    </Suspense>
  )
}

export default AuthLayout