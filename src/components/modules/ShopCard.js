"use client"
import React, { useEffect, useState } from 'react'
import style from '../../style/Shop/Shop.css'
import media from '../../style/Shop/mediaShop.css'
import Image from 'next/image'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Link from 'next/link'

function ShopCard() {

  const [allProducts, setAllProducts] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {

    const getAllProducts = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/product/all`)
      const data = await res.json()
      setAllProducts(data)
      setLoader(false)
    }

    getAllProducts()
  }, [])

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
          y: 80,
          duration: 0.1,
          stagger: 0.1,
        });
      },
      start: "top 80%",
      end: "bottom 30%",
    });
  }, [allProducts]);

  if (loader) {
    return <div className='shop-cards'><h1 className='title-loading'>Loading...</h1></div>
  }

  return (
    <>
      {allProducts.map((product) => (
        <div className='shop-cards' key={product._id}>
          <Image src={'/imgs/watch3.webp'} width={500} height={500} alt='watch' className='img-shop-card' />
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