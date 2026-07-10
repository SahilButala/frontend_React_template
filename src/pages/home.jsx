import axiousInstance from '@/api'
import { getAccessToken } from '@/utils/token-service'
import React, { useEffect } from 'react'

const Home = () => {
  console.log(getAccessToken() , "token ")

  const fetchProducts = async ()=>{
     const {data} = await axiousInstance.get("/auth/all")
     console.log(data)
  }


  return (
    <div>
      <button onClick={()=>fetchProducts()}>Click me to fetch Products</button>
    </div>
  )
}

export default Home