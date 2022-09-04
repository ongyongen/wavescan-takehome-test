import React from "react";
import headerLogo from "../../img/wavescan-logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <img src={headerLogo} id="header-logo" alt="wavescan-logo"></img>
        </div>
    )
}

export default Header;