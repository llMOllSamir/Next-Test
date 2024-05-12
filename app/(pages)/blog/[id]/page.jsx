import React from 'react'


export async function generateMetadata({ params, searchParams }) {
    let data = await fetch("https://jsonplaceholder.org/posts/" + params.id)
    data = await data.json()
    return {
        title: {
            absolute: data.title
        },
        description: data.content.split(" ").slice(0, 10).join(" ")
    }
}


export default async function BlogDetails({ params, searchParams }) {
    let data = await fetch("https://jsonplaceholder.org/posts/" + params.id)
    data = await data.json()
    return (
        <section className="flex min-h-screen flex-col items-center justify-start gap-16 p-24">
            <h1 className="text-3xl font-extrabold text-red-600 ">Blog Details Page</h1>

            <div className='w-full container mx-auto'>
                <h2 className='text-3xl my-5 text-red-600 font-bold'>{data.title}</h2>
                <p>{data.content}</p>
                <img src={data.image} className='w-1/4 ' alt={data.title} />
            </div>

        </section>
    )
}
