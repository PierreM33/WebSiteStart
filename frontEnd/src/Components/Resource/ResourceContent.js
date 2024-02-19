import React, { useState, useEffect } from 'react';
import {addResource, getResource} from "../../Api/Resource";
import {getUser} from "../../Api/User";

const ResourceContent = ({ Logger }) => {
    const storedResources = JSON.parse(localStorage.getItem('resources'));

    const [resources, setResources] = useState(
        storedResources || {
            metals: 0,
            gold: 0,
            orinia: 0,
            orinium: 0,
            energy: 0,
        }
    );
    const [sessionResources, setSessionResources] = useState([]);
    const [production, setProduction] = useState(5);
    const [planetId, setPlanetId] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getResourcePlanet();
    }, []);

    useEffect(() => {
        // const intervalUpdateResource = setInterval(updateResource, 1000); //CHAQUE SECONDE J'UPDATE L'AFFICHAGE DES RESSOURCES
        // const intervalUpdateDatabase = setInterval(updateDatabase, 5000);

        const handleUnload = async () => {
            await updateDatabase();
        };

        window.addEventListener('beforeunload', handleUnload); // QUAND JE QUITTE LA PAGE J'UPDATE LA BASE DE DONNEES

        return () => {
            // clearInterval(intervalUpdateResource);
            // clearInterval(intervalUpdateDatabase);
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [resources, production]);

    const getResourcePlanet = async () => {
        const user = await getUser(Logger);
        // setPlanetId(user.planetSelected.id);
        // const result = await getResource(Logger, user.planetSelected.id, setLoading, true);
        // setResources(result);
        // setSessionResources(result);
    };

    const updateResource = () => {
        setResources((prevResources) => ({
            ...prevResources,
            metals: prevResources.metals + production,
            gold: prevResources.gold + production,
            orinia: prevResources.orinia + production,
            orinium: prevResources.orinium + production,
        }));
    };

    const updateDatabase = async () => {
        try {
            const resourcesDiff = {
                gold: sessionResources.gold - resources.gold,
                metals: sessionResources.metals - resources.metals,
                orinia: sessionResources.orinia - resources.orinia,
                orinium: resources.orinium - sessionResources.orinium,
            };

            setSessionResources((prevSessionResources) => ({
                ...prevSessionResources,
                gold: prevSessionResources.gold - resourcesDiff.gold,
                metals: prevSessionResources.metals - resourcesDiff.metals,
                orinia: prevSessionResources.orinia - resourcesDiff.orinia,
                orinium: prevSessionResources.orinium - resourcesDiff.orinium,
            }));

            console.log("JE DOIS AJOUTER LES RESSOURCES ===", resourcesDiff)
            const result = await addResource(Logger, planetId, resourcesDiff, setLoading, true);
            console.log("ADD RESSOURCES ===", result)
        } catch (error) {
            console.error('Erreur lors de la mise à jour de la base de données :', error);
        }
    };



    return (
        <div style={containerStyle}>
            {resources &&
                <div style={containerHeaderResource}>
                    <span style={{marginLeft: 50}}>{"Métaux: "}{resources.metals} </span>
                    <span style={{marginLeft: 50}}>{"Or: "}{resources.gold} </span>
                    <span style={{marginLeft: 50}}>{"Orinia: "}{resources.orinia} </span>
                    <span style={{marginLeft: 50}}>{"Orinium: "}{resources.orinium} </span>
                </div>}
        </div>
    );
};

const containerStyle = {
    // backgroundColor: '#28c7c2',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
};

const containerHeaderResource = {
    backgroundColor: 'transparent',
    width: "100%",
    justifyContent: 'space-between',
    height: 50,
    padding: 50,
    color: "white",
};

export default ResourceContent;
