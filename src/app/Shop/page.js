import React from 'react'
import style from '../../style/Shop/Shop.css'
import media from '../../style/Shop/mediaShop.css'
import Nav from '@/components/templates/Nav'
import ShopCard from '@/components/modules/ShopCard'

function Shop() {
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