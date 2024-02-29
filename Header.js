import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to= "/Home">Home</Link>
                </li>
                <li>
                    <Link to= "/About">About Us</Link>
                </li>
                <li>
                    <Link to= "/Contact">Contact Us</Link>
                </li>
            </ul>

        </nav>
    );
}
export default Header;