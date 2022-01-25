import React from 'react'
import {NavLink} from 'react-router-dom'
import './App.css'
function Header(){
    return (
        <header>
            <div className="logo">
                Hashuj
            </div>
            
            <div className="menu">
                <NavLink to="/" exact activeClassName="active">Sprawdz</NavLink> 
                <NavLink to="/zakoduj" exact activeClassName="active">Zakoduj</NavLink>
            </div>
        </header>
    );
}

export default Header;