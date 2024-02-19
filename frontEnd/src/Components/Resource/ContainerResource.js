import React, { useState, useEffect } from 'react';
import {addResource, getResource} from "../../Api/Resource";

const ContainerResource = ({ Logger }) => {

    const storedResources = JSON.parse(localStorage.getItem('resources'));
    const [resources, setResources] = useState(storedResources || {
        "metals": 0,
        "gold": 0,
        "orinia": 0,
        "orinium": 0,
        "energy": 0,
    });
    const [sessionResources, setSessionResources] = useState({
        "metals": 0,
        "gold": 0,
        "orinia": 0,
        "orinium": 0,
        "energy": 0,
    });
    const [production, setProduction] = useState(5);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        (async () => {
            console.log("Logger.userId", Logger.userId)
            // const result = await getResource(Logger,Logger.userId, setLoading);
            // setResources(result);
            // setSessionResources(result);
        })()
    }, [])

    useEffect(() => {
        if (resources && !loading) {
            // const interval = setInterval(updateResource, 1000);
            return () => {
                // clearInterval(interval);
            };
        }
    }, [resources, production]);

    useEffect(() => {
        const updateDatabaseInterval = setInterval(updateDatabase, 10000); // Par exemple, toutes les 60 secondes

        return () => {
            clearInterval(updateDatabaseInterval);
        };
    }, []);



    const updateDatabase = async () => {
        try {
            const resourcesDiff = {
                gold: sessionResources.gold - resources.gold,
                metals: sessionResources.metals - resources.metals,
                orinia: sessionResources.orinia - resources.orinia,
                orinium: resources.orinium - sessionResources.orinium,
            };

            setSessionResources(prevSessionResources => ({
                ...prevSessionResources,
                gold: prevSessionResources.gold - resourcesDiff.gold,
                metals: prevSessionResources.metals - resourcesDiff.metals,
                orinia: prevSessionResources.orinia - resourcesDiff.orinia,
                orinium: prevSessionResources.orinium - resourcesDiff.orinium,
            }));

            // Now you can update the database
            // const result = await addResource(Logger, Logger.userId, resourcesDiff, setLoading);
            // console.log("RESSOURCES UPDATE ===", result);

        } catch (error) {
            console.error('Erreur lors de la mise à jour de la base de données :', error);
        }
    };


    const updateResource = () => {
        setResources(prevResources => ({
            ...prevResources,
            metals: resources.metals + production,
            gold: resources.gold + production,
            orinia: resources.orinia + production,
            orinium: resources.orinium + production,
        }));
    };

    return (
        <div style={containerStyle}>
            {resources &&
                <div style={containerHeaderResource}>
                    <span style={{marginLeft: 50}}>{"Métaux: "}{resources.metals} </span>
                    <span style={{marginLeft: 50}}>{"Or: "}{resources.gold} </span>
                    <span style={{marginLeft: 50}}>{"Orinia: "}{resources.orinia} </span>
                    <span style={{marginLeft: 50}}>{"Orinium: "}{sessionResources.orinium + resources.orinium} </span>
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

export default ContainerResource;
