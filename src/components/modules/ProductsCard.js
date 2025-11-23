import Image from 'next/image'
import React from 'react'
import style from '../../style/Admin/Admin.css'
import media from '../../style/Admin/mediaAdmin.css'

function ProductsCard() {

  const products = [
    { id: 1, img: '/imgs/img.avif', title: 'Casio Watch', desc: 'The best and strongest watch', price: 100, count: 30 },
    { id: 2, img: '/imgs/watch2.png', title: 'Huawei Watch', desc: 'The smartest and cleaner watch', price: 136, count: 17 },
    { id: 3, img: '/imgs/watch3.webp', title: 'Apple Watch', desc: 'The strongest and biggest watch', price: 198, count: 45 }
  ]

  return (
    <>
      {products.map((product) => (
        <div className='products-in-shop-card' key={product.id}>
          <div className='container-products-in-shop-cards-texts'>
            <h2 className='title-product-products-in-shop-card'>{product.title}</h2>
            <p className='desc-product-products-in-shop-card'>{product.desc}</p>
            <p className='price-product-products-in-shop-card'>{product.price}$</p>
            <p className='count-product-products-in-shop-card'>{product.count}</p>
          </div>
          <Image width={500} height={500} alt='watch-img' className='img-products-in-shop-card' src={product.img} />
        </div>
      ))}
    </>
  )
}

export default ProductsCard