import * as React from "react"
import "../../styles/style.css"
import { Link } from "gatsby"

const Menu = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Sprawdź</Link>
                </li>
                <li>
                    <Link to="/zakoduj">Zakoduj</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Menu;