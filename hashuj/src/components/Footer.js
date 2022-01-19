import * as React from "react"
import "../styles/style.css"

const mail = "sztandaradam@gmail.com"
const Footer = () =>{
    return(
        <footer>
            <span>&copy; Copyright 2022 <a href={`mailto: ${mail}`} title={mail}>@sztandar</a> </span>
        </footer>
    )
}
export default Footer;