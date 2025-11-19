import React from 'react'
import style from '../style/NotFound/NotFound.css'
import Link from 'next/link'

function notFound() {
    return (
        <div className='container'>
            <div className='container-404'>
                <h1 className='title-404'>404</h1>
                <h1 className='title-not-found'>Page Not Found!</h1>
                <Link href={'/'} className='btn-go-to-home-404'>Home</Link>
            </div>
        </div>
    )
}

export default notFound