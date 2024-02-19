import React from 'react';
import ContainerResourceOld from "../../Components/Resource/ContainerResourceOld";
import headerRight from '../../Assets/Image/Header/headerRight.png';
import imageCenterPNG from '../../Assets/Image/Header/center.png';
import imageCenter from '../../Assets/Image/Header/centre.gif';
import headerLeft from '../../Assets/Image/Header/headerLeft.png';
import ContainerResource from "../../Components/Resource/ContainerResource";
import ResourceContent from "../../Components/Resource/ResourceContent";

const HeaderResource = ({ Logger }) => {
    return (

        <div style={{backgroundColor: "grey", height: 100}}>
            {/*<ContainerResourceOld*/}
            {/*    headerRight={headerRight}*/}
            {/*    imageCenter={imageCenter}*/}
            {/*    headerLeft={headerLeft}*/}
            {/*    imageCenterPNG={imageCenterPNG}*/}
            {/*/>*/}
            {/*<ContainerResource Logger={Logger}/>*/}
            <ResourceContent Logger={Logger}/>
        </div>

    );
};

export default HeaderResource;
