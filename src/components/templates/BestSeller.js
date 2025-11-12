import React from 'react'
import style from '../../style/BestSeller/BestSeller.css'
import media from '../../style/BestSeller/mediaBestSeller.css'
import BestSellerCard from '../modules/BestSellerCard'

function BestSeller() {
    return (
        <div className='container'>
            <h1 className='title-best-seller'>Best Seller</h1>
            <div className='container-best-seller-cards'>
                <BestSellerCard />
            </div>
        </div>
    )
}

export default BestSeller