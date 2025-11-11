"use client"
import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import style from '../../../style/nav/nav.css'
import media from '../../../style/nav/mediaNav.css'
import Link from "next/link"

function Nav() {
    return (
        <div className='container'>
            <nav className="nav">
                <h3 className="logo">SW.</h3>
                <div className="container-nav-links">
                    <Link href="/" className="nav-links active-link">Home</Link>
                    <Link href="/" className="nav-links">Shop</Link>
                </div>
                <div className="container-nav-icons">
                    <CiUser className="nav-icons" />
                    <CiShoppingCart className="nav-icons" />
                </div>
            </nav>
        </div>
    )
}

export default Nav