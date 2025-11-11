"use client"
import React, { useEffect } from 'react'
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import style from '../../../style/nav/nav.css'
import media from '../../../style/nav/mediaNav.css'
import Link from "next/link"
import gsap from 'gsap';

function Nav() {

    useEffect(() => {

        gsap.from('.nav', {
            y: 200,
            duration: 1
        })

    }, [])

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