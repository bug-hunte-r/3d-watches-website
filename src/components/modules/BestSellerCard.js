import React from 'react'
import style from '../../style/BestSeller/BestSeller.css'
import media from '../../style/BestSeller/mediaBestSeller.css'
import Image from 'next/image'

function BestSellerCard() {
    return (
        <div className='best-seller-cards'>
            <Image src={'/img.avif'} width={500} height={500} alt='watch' className='img-best-seller-card' />
            <h3 className='title-best-seller-card'>Apple Watch</h3>
            <p className='desc-best-seller-card'>The best and stronges watch in the world</p>
            <p className='price-best-seller-card'>100$</p>
            <button className='btn-best-seller-card'>Buy</button>
        </div>
    )
}

export default BestSellerCard