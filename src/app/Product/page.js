"use client"
import React from 'react'
import style from '../../style/Product/Product.css'
import media from '../../style/Product/mediaProduct.css'
import Nav from '@/components/templates/Nav'
import Link from 'next/link'

function Product() {
  return (
    <div className='container'>
      <Nav />
      <div className='container-product-detail'>
        <div className='container-model-product-detail'></div>
        <div className='container-product-detail'>
          <h1 className='title-product-detail'>Apple Watch</h1>
          <p className='desc-product-detail'>The strongest and biggest watch</p>
          <Link href={'/'} className='btn-product-detail'>Add to cart</Link>
        </div>
      </div>
    </div>
  )
}

export default Product