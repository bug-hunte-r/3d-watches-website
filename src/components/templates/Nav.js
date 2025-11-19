import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import style from '../../style/nav/nav.css'
import media from '../../style/nav/mediaNav.css'
import Link from "next/link"
import { usePathname } from 'next/navigation';

function Nav() {
    const path = usePathname()

    return (
        <nav className="nav">
            <h3 className="logo">SW.</h3>
            <div className="container-nav-links">
                <Link href="/" className={`nav-links ${path === '/' ? 'active-link' : ''}`}>Home</Link>
                <Link href="/Shop" className={`nav-links ${path === '/Shop' ? 'active-link' : ''}`}>Shop</Link>
            </div>
            <div className="container-nav-icons">
                <Link href={'/Signup'}><CiUser className="nav-icons" /></Link>
                <Link href={'/Cart'}><CiShoppingCart className="nav-icons" /></Link>
            </div>
        </nav>
    )
}

export default Nav