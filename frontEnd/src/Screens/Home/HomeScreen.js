import React, {useEffect, useState} from 'react';
import HeaderResource from '../../Containers/Header/HeaderResource';
import { connect } from 'react-redux';
import { logout } from '../../Redux/actions/authActions';
import {Link} from "react-router-dom";
import BlockMenu from "../../Components/Menu/BlockMenu";
import BlockBody from "../../Components/Body/BlockBody";

const HomeScreen = ({ dispatch, Logger, children  }) => {

    //POUR AJOUTER UN CHILDREN IL FAUT AJOUTER DANS EXPEDITION WARS ENTRE LES BALISE HOMESCEEN
    const [title, setTitle] = useState("Salle de contrôle")

    const menus = [
        {
            title: 'JOUEURS',
            menuItems: [
                { link: '/controls', text: 'Salle de contrôle' },
                { link: '/population', text: 'Population' },
                { link: '/batiment', text: 'Batiment' },
                { link: '/technology', text: 'Technology' },
            ],
        },
        {
            title: 'GENERAL',
            menuItems: [
                { link: '/population', text: 'Population' },
                { link: '/controls', text: 'Home' },
                { link: '/batiment', text: 'Batiment' },
                { link: '/technology', text: 'Technology' },
                { text: 'Déconnexion' },
            ],
        },
    ];

    const handleLogout = () => { //PEUT RENVOYER SUR L'ACCUEIL MAIS PAS NECESSAIRE CAR GERER PAR NAVIGATION
        dispatch(logout());
    };

    const onClickMenu = (state) => {
        setTitle(state)
    }

    return (

        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <HeaderResource Logger={Logger} />
            <div style={{ display: 'flex', flex: 1, backgroundColor: 'black' }}>
                <div style={{flexDirection: 'column', display: 'flex', width: 225, alignItems: "center"}}>
                    {menus.map((menu, index) => (
                        <BlockMenu key={index} title={menu.title} menuItems={menu.menuItems} handleLogout={handleLogout} onClickMenu={onClickMenu} />
                    ))}
                </div>
                <BlockBody children={children} title={title} />
            </div>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        Logger: state.Logger
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => {
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


/*

            <div style={{ backgroundColor: 'red', width: '100%', height: 250 }}>
                <button onClick={handleLogout}>Déconnexion</button>
            </div>
 */


/*

{/*<Menu  handleLogout={handleLogout} />*/

