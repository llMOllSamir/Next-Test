import Image from 'next/image';
import React from 'react'

export const metadata = {
    title: "About"
}


export default async function About() {
    let data = await fetch("https://ecommerce.routemisr.com/api/v1/products")
    data = await data.json()
    console.log(data.data);
    return (
        <section className="flex  min-h-screen flex-col items-center justify-start gap-16 p-24">
            <h1 className="text-3xl font-extrabold text-red-600 ">About Page</h1>
            <div className='grid grid-cols-4'>
                {data?.data.map(product => <div className='p-2 shadow-lg' key={product._id}>
                    <h2 className='text-red-600 text-lg font-bold'>{product.title}</h2>
                    <Image src={product.imageCover} alt={product.title} width={1280} height={500} />
                </div>)}
            </div>
        </section>
    )
}
