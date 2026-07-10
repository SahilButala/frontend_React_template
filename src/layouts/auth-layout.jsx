import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import LoadingSpinner from '../utils/global-loader'

const AuthLayout = () => {
  return (
    <Suspense fallback={<LoadingSpinner/>} > 

    <div className='flex items-center justify-center h-screen'>

      <Outlet/>
    </div>
    </Suspense>
  )
}

export default AuthLayout