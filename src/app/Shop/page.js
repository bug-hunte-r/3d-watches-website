"use client"
import React, { useEffect } from 'react'
import style from '../../style/Shop/Shop.css'
import media from '../../style/Shop/mediaShop.css'
import Nav from '@/components/templates/Nav'
import ShopCard from '@/components/modules/ShopCard'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function Shop() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.title-shop', {
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
      <Nav />
      <div className='container-shop'>
        <h1 className='title-shop'>Shop</h1>
        <div className='container-shop-cards'>
          <ShopCard />
        </div>
      </div>
    </div>
  )
}

export default Shop