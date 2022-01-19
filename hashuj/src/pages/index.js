import * as React from "react"
import "../styles/style.css"
import Header from "../components/Header"
import Sprawdz from "../components/Sprawdz"
import Footer from "../components/Footer"

// markup
const IndexPage = () => {
  return (
    <main className="main">
      <Header />
      <Sprawdz />
      <div id="info"></div>
      <Footer />
    </main>
  )
}

export default IndexPage
