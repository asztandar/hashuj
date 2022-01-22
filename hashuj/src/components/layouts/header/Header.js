import * as React from "react"
import "../../../styles/style.css"
import Logo from "./logo";
import Menu from "./menu";

const Header = () =>{
    return(
        <header className="header">
            <Logo/>
            <Menu/>
        </header>
    )
}

export default Header;