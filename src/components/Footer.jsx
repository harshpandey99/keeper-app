import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return ( <footer><p>
        Copyright © {currentYear}
    </p> 
    <p>Made With ♥ by Harsh Pandey</p>
    </footer>
    );
}

export default Footer;