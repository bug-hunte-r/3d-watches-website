"use client"
import React, { useEffect } from 'react'
import style from '../../style/BestSeller/BestSeller.css'
import media from '../../style/BestSeller/mediaBestSeller.css'
import BestSellerCard from '../modules/BestSellerCard'
import _ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Image from 'next/image'

function BestSeller() {

    useEffect(() => {
        gsap.registerPlugin(_ScrollTrigger)
        gsap.from('.title-best-seller', {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".title-best-seller",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });
    }, [])

    return (
        <div className='container'>
            <div className='container-best-seller'>
                <h1 className='title-best-seller'>Best Seller</h1>
                <div className='container-best-seller-cards'>
                    <BestSellerCard />
                </div>
            </div>
        </div>
    )
}

export default BestSeller