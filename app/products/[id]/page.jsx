import React from 'react'

export default function ProductDetailes({ params }) {
    const { id } = params
    return (
        <div className='min-h-screen flex items-center justify-center text-3xl'>
            ProductDetailes For {id}
        </div>
    )
}



