import * as React from "react";
import { Link } from "gatsby";
import "../../../styles/style.css";
import "../../../styles/hamburger-menu.css";

function toggleMobileMenu() {
    const menu = document.querySelector("#hamburger-icon");
    menu.classList.toggle("open");

    const menuList = document.querySelector(".menuMobile");
    menuList.classList.toggle("open");
}

const Menu = () => {
    return (
        <nav className="menu">
            <div className="menuScreen">
                <ul>
                    <li>
                        <Link to="/" activeClassName="activeLink">
                            Sprawdź
                        </Link>
                    </li>
                    <li>
                        <Link to="/zakoduj" activeClassName="activeLink">
                            Zakoduj
                        </Link>
                    </li>
                </ul>
            </div>
            <div id="hamburger-icon" onClick={toggleMobileMenu} onKeyDown={toggleMobileMenu} role="presentation">
                <div class="bar1 bar"></div>
                <div class="bar2 bar"></div>
                <div class="bar3 bar"></div>
                <div className="menuMobile">
                    <ul>
                        <li>
                            <Link to="/" activeClassName="activeLink">
                                Sprawdź
                            </Link>
                        </li>
                        <li>
                            <Link to="/zakoduj" activeClassName="activeLink">
                                Zakoduj
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
