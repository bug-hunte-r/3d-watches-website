"use client"
import React, { useEffect } from 'react'
import style from '../../style/Shop/Shop.css'
import media from '../../style/Shop/mediaShop.css'
import Nav from '@/components/templates/Nav'
import ShopCard from '@/components/modules/ShopCard'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import FloatingLines from '@/anim/FloatingLines'
import Image from 'next/image'

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
      <div className="background">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <FloatingLines
            enabledWaves={['middle']}
            lineCount={[20, 20, 20]}
            lineDistance={[80, 80, 80]}
            bendRadius={10}
            bendStrength={-0.5}
            interactive={false}
            parallax={false}
          />
        </div>
      </div>
      <Nav />
      <div className='container-shop'>
        <h1 className='title-shop'>Shop</h1>
        <div className='container-shop-cards'>
          <ShopCard />
        </div>
        <div className='container-whatches-category'>
          <div className='container-classic-watches'>
            <h2 className='title-classic-watches'>Classical Watches</h2>
            <Image src={'/imgs/classic.webp'} width={500} height={500} alt='classic' className='img-classic-watch' />
          </div>
          <div className='container-modern-watches'>
            <h2 className='title-modern-watches'>Modern Watches</h2>
            <Image src={'/imgs/modern.webp'} width={500} height={500} alt='modern' className='img-modern-watch' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop