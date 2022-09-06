import React from "react";
import { Link } from "react-router-dom";
import '../../styles/LayoutPage.css';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/scrap">Scrap</Link></li>
                    <li><Link to="/diy">Plantillas</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav >



    );
}

export default Nav;