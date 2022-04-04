import * as React from "react"
import FeatCollection from "../components/FeatCollection"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "../components/Layout"
import Newsletter from "../components/Newsletter"
import ProductCard from "../components/ProductCard";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import heroImg1 from '../images/hero-img1.png'
import heroImg2 from '../images/hero-img2.png'
import heroImg3 from '../images/hero-img3.png'

const carousel = {
  heroSection: [
    {
      image: heroImg1,
      heading: "Shop New Arrivals",
      subtext: "Our coolest new items are waiting for you!",
    },
    {
      image: heroImg2,
      heading: "Our Fave Tees",
      subtext: "Shop all of our favorites.",
    },
    {
      image: heroImg3,
      heading: "Men’s Tees",
      subtext: "Find the perfect shirt",
    }
  ]
}

function IndexPage() {
  return (
    <Layout>
      {/* Hero Carousel */}
      <div className="hero-section">
        <Carousel showThumbs={false} showStatus={false}>
          {carousel.heroSection.map((item) => (
            <div className="hero-container">
              <div className="hero-img_contain">
                <img src={item.image} className="hero-img"/>
              </div>
              <div className="hero-text">
                <h1>{item.heading}</h1>
                <p>{item.subtext}</p>
                <Link className="btn-small">Shop Now</Link>
              </div>
            </div>
          ))}
        </Carousel>

        <div className='featured-text_contain text-center'>
            <div className='featured-text'>
                <h1>Shop New Arrivals</h1>
                <p>Our coolest new items are waiting for you!</p>
                <Link className="btn-small">Shop Now</Link>
            </div>
        </div>
      </div>
      {/* End Hero Carousel */}

      {/* Categories */}
      <div className="categories-section">
        <div className="container">
          <div className="flex categories-wrapper">
            <div className="cat womens-cat">
              <div className="cat-text">
                <h2>Women's</h2>
              </div>
            </div>
            <div className="cat mens-cat">
              <div className="cat-text">
                <h2>Men's</h2>
              </div>
            </div>
            <div className="cat accessories-cat">
              <div className="cat-text">
                <h2>Accessories</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Categories */}

      {/* New Arrivals Carousel */}
      <div className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h1><span className="desktop-hidden">Shop</span>New Arrivals</h1>
          </div>
          <Swiper
            slidesPerView={2}
            breakpoints= {{
              768: {
                width: 768,
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* End New Arrivals Carousel */}

      <FeatCollection />
      <Newsletter />
    </Layout>
  )
}

export default IndexPage
