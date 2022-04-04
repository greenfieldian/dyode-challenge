import { Link } from 'gatsby'
import React from 'react'

import featuredImg from "../images/featured-collection_mobile.png"
import featuredImgDesktop from "../images/featured-collection_desktop.png"

export default function FeatCollection() {
  return (
    <div className='promo-grid_container'>
        <div className='promo-grid_bg'>
            <img src={featuredImg} className="desktop-hidden" />
            <img src={featuredImgDesktop} className="mobile-hidden" />
        </div>
        <div className='featured-text_contain'>
            <div className='featured-text'>
                <h1>Our Favorite Tees</h1>
                <p>Everyday tees you need!</p>
                <Link className="btn-promo">Shop Now</Link>
            </div>
        </div>
    </div>
  )
}
