import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import style from '../../style/nav/nav.css'
import media from '../../style/nav/mediaNav.css'
import Link from "next/link"

function Nav() {
    return (
        <nav className="nav">
            <h3 className="logo">SW.</h3>
            <div className="container-nav-links">
                <Link href="/" className="nav-links active-link">Home</Link>
                <Link href="/" className="nav-links">Shop</Link>
            </div>
            <div className="container-nav-icons">
                <Link href={'/Signup'}><CiUser className="nav-icons" /></Link>
                <CiShoppingCart className="nav-icons" />
            </div>
        </nav>
    )
}

export default Nav