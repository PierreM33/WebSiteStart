import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import BlockBody from "../../Components/Body/BlockBody";
import {getUser} from "../../Api/User";

const BuildingScreen = ({ dispatch, Logger }) => {


    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: "100%", backgroundColor: "rgba(166,166,166,0)" }}>

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

export default connect(mapStateToProps, mapDispatchToProps)(BuildingScreen);
