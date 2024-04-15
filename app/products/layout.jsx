import React from 'react'

export default function ProductRoot({ children }) {
    return (
        <div className='mt-20'>
            <aside className='fixed bg-red-600 inset-0 w-32'></aside>

            <div className='ms-32'> {children}</div>
        </div>
    )
}
