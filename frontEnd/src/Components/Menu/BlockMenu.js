import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import menuTop from "../../Assets/Design/Game/Menu/menu_haut.png";
import menuMiddle from "../../Assets/Design/Game/Menu/menu_milieu.png";
import menuBas from "../../Assets/Design/Game/Menu/menu_bas.png";

const BlockMenu = ({ title, menuItems, handleLogout, onClickMenu }) => {

    return (
        <div style={menuStyle}>
            <div style={menuHautStyle}>{title}</div>
            <div style={menuMilieuStyle}>
                <ul style={ulStyle}>
                    {menuItems.map((item, index) => (
                        <li key={index} onClick={() => onClickMenu(item.text)}>
                            {item.link ? (
                                <Link to={item.link} style={lienStyle}>
                                    {item.text}
                                </Link>
                            ) : (
                                <button onClick={handleLogout} style={lienStyle}>
                                    {item.text}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={menuBasStyle}></div>
        </div>
    );
};


const menuStyle = {
    width: '208px',
    float: 'left',
    overflow: 'hidden',
    marginTop: 25,
};

const menuHautStyle = {
    background: `url(${menuTop}) no-repeat`,
    height: '78px',
    color: '#ffffff',
    textAlign: 'center',
    paddingTop: 17,
    fontFamily: 'Agency FB',
    fontSize: 20,
};

const menuMilieuStyle = {
    background: `url(${menuMiddle}) repeat-y`,
    width: '208px',
};

const ulStyle = {
    margin: '0 0 0 20px',
    listStyle: 'none',
};

const lienStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily: 'Agency FB',
    textAlign: "center",
    display: 'flex',
    justifyContent: 'center',
    height: 30,
    paddingTop: 8,
    paddingRight: 16
};

const lienHoverStyle = {
    color: '#1fc3ff',
};

const menuBasStyle = {
    background: `url(${menuBas}) no-repeat`,
    height: '74px',
    marginBottom: '15px',
    position: 'relative',
};


export default BlockMenu;
