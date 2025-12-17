"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from '../../style/Admin/Admin.css'
import media from '../../style/Admin/mediaAdmin.css'
import { CiTrash } from "react-icons/ci";

function ProductsCard() {

  const productsImg = [
    { img: '/imgs/img.avif' },
    { img: '/imgs/watch2.png' },
    { img: '/imgs/watch3.webp' }
  ]

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {

    const getAllProducts = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/product/all`)
      const data = await res.json()
      setAllProducts(data)
    }

    getAllProducts()
  }, [])

  const deleteProductHandler = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/product/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    })
    const data = await res.json()
    console.log(data);
  }

  return (
    <>
      {allProducts.map((product) => (
        <div className='products-in-shop-card' key={product._id}>
          <div className='container-products-in-shop-cards-texts'>
            <h2 className='title-product-products-in-shop-card'>{product.title}</h2>
            <p className='desc-product-products-in-shop-card'>{product.desc}</p>
            <p className='price-product-products-in-shop-card'>{product.price}$</p>
            <p className='count-product-products-in-shop-card'>{product.count} In Stock</p>
            <CiTrash className='icon-delete-product-from-store' onClick={() => deleteProductHandler(product._id)} />
          </div>
          <Image width={500} height={500} alt='watch-img' className='img-products-in-shop-card' src={'/imgs/watch3.webp'} />
        </div>
      ))}
    </>
  )
}

export default ProductsCard