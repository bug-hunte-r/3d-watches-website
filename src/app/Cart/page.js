"use client"
import React from 'react'
import style from '../../style/Cart/Cart.css'
import media from '../../style/Cart/mediaCart.css'
import Nav from '@/components/templates/Nav'
import CartCards from '@/components/modules/CartCards'
import { ToastContainer, toast } from 'react-toastify';
import { redirect } from 'next/navigation'

function Cart() {

    const notifBuy = () => toast.success("Purchase Completed Successfully.");

    const buyHandler = () => {
        notifBuy()
    }

    return (
        <div className='container'>
            <Nav />
            <div className='container-cart'>
                <h1 className='title-cart'>Cart</h1>
                <div className='container-cart-cards'>
                    <CartCards />
                </div>
                <button className='btn-cart' onClick={buyHandler}>Submit</button>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Cart