import * as React from "react"
import Sprawdz from "../components/layouts/children/Sprawdz"
import Layout from "../components/layouts/Layout"
import "../styles/style.css"

const IndexPage = () => {
  return (
    <main className="main">
       <Layout>
         <Sprawdz />
       </Layout>
    </main>
  )
}

export default IndexPage
