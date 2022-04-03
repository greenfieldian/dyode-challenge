import * as React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import PromoBar from "./PromoBar"

import '../styles/global.scss'

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
