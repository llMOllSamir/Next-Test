import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const metadata = {
    title: "Blog"
}

export default async function Blog() {
    let data = await fetch("https://jsonplaceholder.org/posts")
    data = await data.json()

    return (
        <section className="flex min-h-screen flex-col items-center justify-start gap-16 p-24">
            <h1 className="text-3xl font-extrabold text-red-600 ">Blog Page</h1>
            <div className='grid w-full gap-5 grid-cols-4'>
                {data.map(post => <div key={post.id} className='shadow-md p-5 shadow-red-600'>
                    <Link href={`/blog/${post.id}`}>
                        <p>
                            {post.title}
                        </p>
                        <Image src={post.image} alt={post.title} width={200} height={200} />
                    </Link>
                </div>)}
            </div>
        </section>
    )
}
