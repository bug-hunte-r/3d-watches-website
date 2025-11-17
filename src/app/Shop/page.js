"use client"
import React, { useEffect } from 'react'
import style from '../../style/Shop/Shop.css'
import media from '../../style/Shop/mediaShop.css'
import Nav from '@/components/templates/Nav'
import ShopCard from '@/components/modules/ShopCard'
import FloatingLines from '@/anim/FloatingLines'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Shop() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.batch(".container-classic-watches", {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.5,
        });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, {
          opacity: 0,
          y: 50,
          duration: 0.1,
          stagger: 0.1,
        });
      },
      start: "top 90%",
      end: "bottom 20%",
    });
  }, []);

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
            <Image src={'/imgs/clas.webp'} width={500} height={500} alt='classic' className='img-classic-watch' />
          </div>
          <div className='container-classic-watches'>
            <h2 className='title-classic-watches'>Modern Watches</h2>
            <Image src={'/imgs/modern.webp'} width={500} height={500} alt='classic' className='img-classic-watch' />
          </div>
          <div className='container-classic-watches'>
            <h2 className='title-classic-watches'>Strong Watches</h2>
            <Image src={'/imgs/clas2.webp'} width={500} height={500} alt='classic' className='img-classic-watch' />
          </div>
          <div className='container-classic-watches'>
            <h2 className='title-classic-watches'>Samrt Watches</h2>
            <Image src={'/imgs/smart.webp'} width={500} height={500} alt='classic' className='img-classic-watch' />
          </div>
          <div className='container-classic-watches'>
            <h2 className='title-classic-watches'>Strange Watches</h2>
            <Image src={'/imgs/strange.png'} width={500} height={500} alt='classic' className='img-classic-watch' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop