import React from 'react'

export default function ProductDetailes({ params }) {
    const { id } = params
    return (
        <section className='flex min-h-screen flex-col items-center justify-between p-24'>
            <h1 className="text-3xl font-extrabold text-red-600 ">Products Detailes For {id} Page</h1>
        </section>
    )
}



