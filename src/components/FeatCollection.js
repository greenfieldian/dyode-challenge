import { Link } from 'gatsby'
import React from 'react'

import featuredImg from "../images/featured-collection_mobile.png"

export default function FeatCollection() {
  return (
    <div className='promo-grid_container'>
        <div className='promo-grid_bg'>
            <img src={featuredImg}/>
        </div>
        <div className='featured-text_contain'>
            <div className='featured-text text-center'>
                <h1>Our Favorite Tees</h1>
                <p>Everyday tees you need!</p>
                <Link className="btn-small">Shop Now</Link>
            </div>
        </div>
    </div>
  )
}
