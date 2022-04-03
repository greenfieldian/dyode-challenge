import * as React from "react"
import FeatCollection from "../components/FeatCollection"


import Layout from "../components/Layout"
import Newsletter from "../components/Newsletter"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <FeatCollection />
    <Newsletter />
  </Layout>
)

export default IndexPage
