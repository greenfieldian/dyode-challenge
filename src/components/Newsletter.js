import { Link } from 'gatsby'
import React from 'react'

export default function Newsletter() {
  return (
    <div className='newsletter'>
        <div className="container">
            <div>
                <span></span>
                <h2>Sign Up & Stay Connected</h2>
            </div>
            <div className="newsletter-content">
                <div className="newsletter-text">
                    <p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
                </div>
                <form className='newsletter-form'>
                    <input type="email" placeholder="Enter Your Email Address" className="subscribe-input"/>
                    <Link className="btn-large">Subscribe</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
