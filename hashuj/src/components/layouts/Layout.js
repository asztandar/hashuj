import * as React from "react"
import "../../styles/style.css"
import Footer from "./footer/footer";
import Header from "./header/Header";


const Layout = (props) =>{
    return (
        <div className="layout">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;