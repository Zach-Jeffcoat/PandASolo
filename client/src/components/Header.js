import React from 'react';
import { Link } from '@reach/router';




const Header = (props)=>{


    const {link, linkText, titleText} = props;


    return(
        <header style={{ borderBottom: "5px double lightgray", padding: "10px", margin: "10px" }}>
            <h1 style={{ fontSize: "50px", marginLeft: "450px", marginRight: "450px" }}>{titleText}</h1>
            <Link to={link}>{linkText}</Link>
        </header>
        
    )
}


export default Header;