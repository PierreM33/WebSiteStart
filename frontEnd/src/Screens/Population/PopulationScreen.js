import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {getPopulationPlanet} from "../../Api/Population";

const PopulationScreen = ({ dispatch, Logger }) => {

    const [population, setPopulation] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            console.log("Logger.planetSelected.id", Logger)
            // const result = await getPopulationPlanet(Logger, Logger.planetId, setLoading)
            // console.log("RESULTAT ===", result)
            // setPopulation(result)
        })()
    }, [])

    const calculatePopulation = () => {
        const populationGlobal = population.worker + population.slave + population.warrior + population.pilot + population.scientist + population.civil + population.population
        return populationGlobal
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ textAlign: 'center', padding: '20px', borderRadius: '10px', color: "black", background: "gray" }}>
                <p>Production de population par heure: 5</p>
                <p>Population globale: {calculatePopulation}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(PopulationScreen);
