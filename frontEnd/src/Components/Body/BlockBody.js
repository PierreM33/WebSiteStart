import React, {useEffect, useRef, useState} from 'react';
import bodyTop from "../../Assets/Design/Game/Body/corps_haut.png";
import bodyMiddle from "../../Assets/Design/Game/Body/corps_milieu.png";
import bodyBas from "../../Assets/Design/Game/Body/corps_bas.png";
import titleImg from "../../Assets/Design/Game/Common/titre_page.png";

const BlockBody = ({ children, title }) => {
    const [contentHeight, setContentHeight] = useState('auto');
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            const height = contentRef.current.offsetHeight;
            setContentHeight(height);
        }
    }, [children]);

    return (
        <div style={{ flex: 1, display: "flex"}}>
            <div style={sectionStyle}>
                <div style={{ ...hautCorpsStyle, backgroundImage: `url(${bodyTop})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <div style={{...titleStyle, backgroundImage: `url(${titleImg})`}}>
                    <div style={{...texTitleStyle}}>{title.toUpperCase()}</div>
                </div>
                <div style={{ ...milieuCorpsStyle, height: contentHeight, backgroundImage: `url(${bodyMiddle})`, backgroundRepeat: 'repeat-y' }}>
                    <div ref={contentRef} style={{alignItems:"center", padding: "5%"}}>
                        {children}
                    </div>
                </div>
                <div style={{ ...footerStyle, backgroundImage: `url(${bodyBas})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            </div>
        </div>
    );
};

const texTitleStyle = {
    marginTop: "16%",
    width: "100%",
    textAlign: "center",
    color: "white",
    fontSize: "30px",
}

const titleStyle = {
    position: "absolute",
    top: "3.2%",
    left: "25%",
    width: 730,
    height: 205,
    backgroundRepeat: "no-repeat",
}
const sectionStyle = {
    position: "relative", // Ajout de la position relative
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: '90%',
    height: '100%',
    overflow: 'auto',
};

const hautCorpsStyle = {
    flex: '0 0 auto',
    width: '100%',
    height: 225,
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${bodyTop})`,
    fontFamily: 'Agency FB',
    color: '#ffffff',
    overflow: 'hidden',
};

const milieuCorpsStyle = {
    flex: '0 0 auto',
    width: '100%',
    minHeight: 416,
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat-y',
    backgroundImage: `url(${bodyMiddle})`,
    color: 'transparent',
    fontFamily: 'Agency FB',
    overflowY: 'visible',
};


const footerStyle = {
    flex: '0 0 auto',
    width: '100%',
    height: 330,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${bodyBas})`,
    fontFamily: 'Agency FB',
    color: '#ffffff',
    fontSize: '12px',
    textAlign: 'center',
    overflow: 'hidden',
};

export default BlockBody;
