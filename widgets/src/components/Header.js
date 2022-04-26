import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">Accordion</Link>
            <Link href="/list" className="item">WikiSearch</Link>
            <Link href="/translate" className="item">Translator</Link>
            <Link href="/dropdown" className="item">Dropdown</Link>
        </div>
    )
};

export default Header;