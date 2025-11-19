"use client"
import React from 'react'
import style from '../../style/Cart/Cart.css'
import media from '../../style/Cart/mediaCart.css'
import Nav from '@/components/templates/Nav'

function Cart() {
    return (
        <div className='container'>
            <Nav />
            <div className='container-cart'>
                <h1 className='title-cart'>Cart</h1>
            </div>
        </div>
    )
}

export default Cart