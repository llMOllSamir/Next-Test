"use client"
import React from 'react'

export default function ErrorBoundary({ error, reset }) {
    return (
        <section className='min-h-screen gap-5 flex justify-center items-center flex-col'>
            <h1 className='text-2xl text-red-950 font-semibold'>{error.message}</h1>
            <p className='text-red-600'>SomeThing Went Wrong</p>
            <button className='px-5 py-2 bg-red-600 text-white' onClick={() => { reset() }}>Reload</button>
        </section>
    )
}
