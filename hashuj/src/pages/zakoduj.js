import * as React from "react"
import Zakoduj from "../components/layouts/children/Zakoduj"
import Layout from "../components/layouts/Layout"
import "../styles/style.css"

const IndexPage = () => {
  return (
    <main className="main">
       <Layout>
        <Zakoduj />
       </Layout>
    </main>
  )
}

export default IndexPage
