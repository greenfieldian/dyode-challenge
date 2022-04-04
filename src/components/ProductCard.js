import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function ProductCard() {
  return (
    <Link>
        <div>
            <StaticImage 
                src="../images/product-img.png"
                alt='Product image'
                placeholder='blurred'
                className='product-img'
            />
        </div>
        <div className="product-text">
            <div className='product-title'>Product Title</div>
            <div className='product-cat'>Women's T-shirt</div>
            <div className='product-price'>$19.99</div>
        </div>
    </Link>
  )
}
