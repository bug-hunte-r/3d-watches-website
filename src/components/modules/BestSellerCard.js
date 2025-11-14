"use client"
import React, { useEffect } from 'react'
import style from '../../style/BestSeller/BestSeller.css'
import media from '../../style/BestSeller/mediaBestSeller.css'
import Image from 'next/image'
import _ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

function BestSellerCard() {

  const products = [
    { id: 1, img: '/imgs/img.avif', title: 'Casio Watch', desc: 'The best and strongest watch', price: 100 },
    { id: 2, img: '/imgs/watch2.png', title: 'Huawei Watch', desc: 'The smartest and cleaner watch', price: 136 },
    { id: 3, img: '/imgs/watch3.webp', title: 'Apple Watch', desc: 'The strongest and biggest watch', price: 198 }
  ]

  useEffect(() => {
    gsap.registerPlugin(_ScrollTrigger);

    _ScrollTrigger.batch(".best-seller-cards", {
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
          duration: 0.5,
          stagger: 0.5,
        });
      },
      start: "top 70%",
      end: "bottom 30%",
    });
  }, []);


  return (
    <>
      {products.map((product) => (
        <div className='best-seller-cards' key={product.id}>
          <Image src={product.img} width={500} height={500} alt='watch' className='img-best-seller-card' />
          <h3 className='title-best-seller-card'>{product.title}</h3>
          <p className='desc-best-seller-card'>{product.desc}</p>
          <p className='price-best-seller-card'>{product.price}$</p>
          <button className='btn-best-seller-card'>Buy</button>
        </div>
      ))}
    </>
  )
}

export default BestSellerCard