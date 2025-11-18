"use client"
import React, { useEffect } from 'react'
import style from '../../style/Shop/Shop.css'
import media from '../../style/Shop/mediaShop.css'
import Image from 'next/image'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Link from 'next/link'

function ShopCard() {

  const products = [
    { id: 1, img: '/imgs/watch3.webp', title: 'Apple Watch', desc: 'The strongest and biggest watch', price: 198 },
    { id: 2, img: '/imgs/watch2.png', title: 'Huawei Watch', desc: 'The smartest and cleaner watch', price: 136 },
    { id: 3, img: '/imgs/img.avif', title: 'Casio Watch', desc: 'The best and strongest watch', price: 100 },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.batch(".shop-cards", {
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
      start: "top 80%",
      end: "bottom 30%",
    });
  }, []);

  return (
    <>
      {products.map((product) => (
        <div className='shop-cards' key={product.id}>
          <Image src={product.img} width={500} height={500} alt='watch' className='img-shop-card' />
          <h3 className='title-shop-card'>{product.title}</h3>
          <p className='desc-shop-card'>{product.desc}</p>
          <p className='price-shop-card'>{product.price}$</p>
          <Link className='btn-shop-card' href={'/Product'}>See 3D</Link>
        </div>
      ))}
    </>
  )
}

export default ShopCard