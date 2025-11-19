"use client"
import React from 'react'
import style from '../../style/Cart/Cart.css'
import media from '../../style/Cart/mediaCart.css'
import Nav from '@/components/templates/Nav'
import CartCards from '@/components/modules/CartCards'

function Cart() {
    return (
        <div className='container'>
            <Nav />
            <div className='container-cart'>
                <h1 className='title-cart'>Cart</h1>
                <div className='container-cart-cards'>
                    <CartCards />
                </div>
            </div>
        </div>
    )
}

export default Cart