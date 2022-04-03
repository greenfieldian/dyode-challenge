import * as React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import "./layout.css"
import Footer from "./Footer"
import PromoBar from "./PromoBar"

const Layout = ({ children }) => {
  return (
    <>
      <PromoBar />
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
