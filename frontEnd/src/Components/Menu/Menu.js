import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ handleLogout}) => {


    return (
        <div>
            <div>TITRE ICI</div>
            <ul>
                <li>
                    <Link to="/population">Population</Link>
                </li>
                <li>
                    <Link to="/controls">Home</Link>
                </li>
                <li>
                    <Link to="/batiment">Batiment</Link>
                </li>
                <li>
                    <button onClick={handleLogout}>Déconnexion</button>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
