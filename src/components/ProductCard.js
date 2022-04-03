import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function ProductCard() {
  return (
    <Link>
        <div>
            <StaticImage 
                src="../images/product-img.jpg"
                alt='Product image'
                placeholder='blurred'
            />
        </div>
        <div>
            <div className='product-title'></div>
            <div className='product-cat'></div>
            <div className='product-price'></div>
        </div>
    </Link>
  )
}
