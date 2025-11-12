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

        gsap.from('.container-big-card-best-seller-1', {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".container-big-card-best-seller-1",
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        })

        gsap.from('.container-big-card-best-seller-2', {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".container-big-card-best-seller-2",
                start: "top 100%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        })

    }, [])

    return (
        <div className='container'>
            <div className='container-best-seller'>
                <h1 className='title-best-seller'>Best Seller</h1>
                <div className='container-best-seller-cards'>
                    <BestSellerCard />
                </div>
                <div className='container-big-card-best-seller-1'>
                    <div className='container-img-big-card-1'>
                        <Image src={'/imgs/img-big.png'} width={500} height={500} alt='big-watch' className='img-big-card1' />
                    </div>
                    <div className='container-texts-big-card-1'>
                        <h2 className='title-big-card-1'>Apple Watch Ultra 3</h2>
                        <p className='desc-big-card-1'>The perfect and smart watch with great bands</p>
                        <p className='price-big-card-1'>200$</p>
                        <button className='btn-big-card-1'>Buy</button>
                    </div>
                </div>

                <div className='container-big-card-best-seller-2'>
                    <div className='container-texts-big-card-1'>
                        <h2 className='title-big-card-1'>Oraimo Watch 5</h2>
                        <p className='desc-big-card-1'>The greate and quick watch with amazing bands</p>
                        <p className='price-big-card-1'>148$</p>
                        <button className='btn-big-card-1'>Buy</button>
                    </div>
                    <div className='container-img-big-card-2'>
                        <Image src={'/imgs/img-big-2.webp'} width={500} height={500} alt='big-watch' className='img-big-card2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSeller