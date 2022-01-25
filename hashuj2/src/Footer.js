import React from 'react'
import './App.css'
function Footer(){
    const mail="sztandaradam@gmail.com";
    return (
        <footer>
            <span>&copy;Copyright 2022 <a href={`mailto: ${mail}`} title={mail}>@sztandar</a></span>
        </footer>
    );
}

export default Footer;