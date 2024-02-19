import React, { useState, useEffect } from 'react';
import {getResource} from "../../Api/Resource";


const ContainerResourceOld = ({ headerRight, imageCenterPNG, imageCenter, headerLeft }) => {
    const [resources, setResources] = useState([
        {
            id: 1,
            type: 'gold',
            amount: 0,
            production: 1,
        },
        {
            id: 2,
            type: 'iron',
            amount: 0,
            production: 2,
        },
        {
            id: 3,
            type: 'energy',
            amount: 0,
            production: 0.5,
        },
        {
            id: 3,
            type: 'energy',
            amount: 0,
            production: 0.5,
        },
    ]);
    const [result, setResult] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            resources.forEach((resource) => { //PARCOURS LE TABLEAU
                increaseResource(resource.id, resource.production);
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [resources]);


    const increaseResource = (id, amount) => {
        setResources((prevResources) =>
            prevResources.map((resource) =>
                resource.id === id ? { ...resource, amount: resource.amount + amount } : resource
            )
        );
    }


    const insideContainerResource = (n1, n2) => {
        return (
            <div className={"resourceB1"}>
                {resources.slice(n1, n2).map((resource) => (
                    <div key={resource.id} className="blueRectangle">
                          <span className="resourceText">
                            {resource.type}: {resource.amount}
                          </span>
                    </div>
                ))}
            </div>
        )
    }


    return (
            <div className={"containerResource"}>
                <div
                    className={"containerHeaderLeft"}
                     style={{
                         backgroundImage: `url(${headerLeft})`,
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'right',
                     }}
                >
                    <div className={"blocResourceLeft"} style={{justifyContent: "right"}}>
                        {insideContainerResource(0,2)}
                        {insideContainerResource(2,4)}
                    </div>
                </div>
                <div className={"containerCenter"}
                     style={{
                         backgroundImage: `url(${imageCenterPNG})`,
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center',
                     }}
                />
                <div className={"containerHeaderRight"}
                     style={{
                         backgroundImage: `url(${headerRight})`,
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'left',
                     }}
                >
                    <div className={"blocResourceLeft"} style={{justifyContent: "left"}}>
                        {insideContainerResource(0,2)}
                        {insideContainerResource(2,4)}
                    </div>
                </div>
            </div>
    );
};


export default ContainerResourceOld;
