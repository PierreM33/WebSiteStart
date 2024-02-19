import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {getTechnology, getTechnologyUser} from "../../Api/Technology";
import TechnologyCard from "../../Components/Technology/TechnologyCard";

const TechnologyScreen = ({ Logger }) => {

    const [technology, setTechnology] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await getTechnologyUser(Logger, Logger.userId, setLoading)
            console.log("RESULTAT ===", result)
            setTechnology(result)
        })()
    }, []);



    return (
        <div style={{ backgroundColor: "black", padding: 50, display: "flex", width: '100%', height: '100%', flexDirection: 'column' }}>
            <div style={{ display: 'flex', backgroundColor: "transparent" }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                    {technology && technology.map((tech, index) => (
                        <TechnologyCard key={index} technology={tech} />
                    ))}
                </div>
            </div>
        </div>
    );

};

const mapStateToProps = (state) => {
    return {
        Logger: state.Logger
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyScreen);
