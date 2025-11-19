import Image from 'next/image'
import React from 'react'
import style from '../../style/Cart/Cart.css'
import media from '../../style/Cart/mediaCart.css'

function CartCards() {

  const products = [
    { id: 1, img: '/imgs/img.avif', title: 'Casio Watch', desc: 'The best and strongest watch', price: 100 },
    { id: 2, img: '/imgs/watch2.png', title: 'Huawei Watch', desc: 'The smartest and cleaner watch', price: 136 },
    { id: 3, img: '/imgs/watch3.webp', title: 'Apple Watch', desc: 'The strongest and biggest watch', price: 198 }
  ]

  return (
    <>
      {products.map((product) => (
        <div className='cart-card' key={product.id}>
          <div className='container-cart-cards-texts'>
            <h2 className='title-product-cart-card'>{product.title}</h2>
            <p className='desc-product-cart-card'>{product.desc}</p>
            <p className='price-product-cart-card'>{product.price}$</p>
            <div className='container-add-and-remove-product-count'>
              <p className='btn-add-product'>+</p>
              <p className='product-count'>1</p>
              <p className='btn-mines-product'>-</p>
            </div>
          </div>
          <Image width={500} height={500} alt='watch-img' className='img-cart-card' src={product.img} />
        </div>
      ))}
    </>
  )
}

export default CartCards