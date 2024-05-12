import React from 'react'

export default function GetData({ timing }) {
    const fetchData = () => new Promise(resolve => {
        setTimeout(() => {
            resolve("data Successfully Fetched !")
        }, timing)
    })

    let data = fetchData()

    return (
        <h3 className='text-lg font-bold'>{data}</h3>
    )
}
