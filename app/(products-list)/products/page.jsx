"use client"
import React, { useEffect, useState } from 'react'


export default function Products() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/products").then(res => res.json())
      console.log(data);
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <section className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className="text-3xl font-extrabold text-red-600 ">Products Page</h1>
      {
        data.map(product => <div key={product.id} className='bg-red-600 px-10 py-3 rounded-2xl my-5 text-white capitalize '>
          <h2 className='text-2xl'>{product.title}</h2>
          <p>{product.price} EGP</p>
        </div>)
      }
    </section>
  )

}

