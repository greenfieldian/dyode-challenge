import React from 'react'

export default function Newsletter() {
  return (
    <div>
        <div>
            <span></span>
            <h2>Sign Up & Stay Connected</h2>
        </div>
        <div className="form text and input">
            <div>
                <p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
            </div>
            <form>
                <input type="email" placeholder="Enter Your Email Address" className=""/>
                <button>Subscribe</button>
            </form>
        </div>
    </div>
  )
}
