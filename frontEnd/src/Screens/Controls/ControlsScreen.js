import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {getUser} from "../../Api/User";

const ControlsScreen = ({ dispatch, Logger  }) => {

    const [user, setUser] = useState({})

    useEffect( () => {
        (async () => {
            const res = await getUser(Logger)
            console.log("Logger.user", res)
            setUser(res)
        })()
    }, [])

    return (

        <div style={{ display: 'flex', flexDirection: 'column', width: "100%", backgroundColor: "rgba(166,166,166,0)" }}>
            <div style={{ margin: '0', width: '50%', backgroundColor: "rgba(231,231,231,0.47)", borderRadius: 20, padding: 50}}>
                <h1 style={{color: "orange"}}>{user.name}</h1>
                <h1 style={{color: "orange"}}>{user.race}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(ControlsScreen);

