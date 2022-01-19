import * as React from "react"
import "../styles/style.css"
import Logo from "./Header/logo"
import Menu from "./Header/menu"

const Header = () =>{
    return(
        <header>
            <Logo />
            <Menu />
        </header>
    )
}
export default Header;