import React from 'react'
import style from '../../style/BestSeller/BestSeller.css'
import media from '../../style/BestSeller/mediaBestSeller.css'
import Image from 'next/image'

function BestSellerCard() {

    const products = [
        { id: 1, img: '/img.avif', title: 'Casio Watch', desc: 'The best and strongest watch in the world', price: 100 },
        { id: 2, img: '/watch2.png', title: 'Huawei Watch', desc: 'The smartest and cleaner watch in the world', price: 136},
        { id: 3, img: '/watch3.webp', title: 'Apple Watch', desc: 'The strongest and biggest watch in the world', price: 198}
    ]

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