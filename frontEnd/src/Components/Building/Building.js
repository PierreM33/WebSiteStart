import React from 'react';
import buildingImage from '../../Assets/Image/Building/noImg.png';

const Building = () => {

    const upgrade = () => {

    }

    return (
        <div className="containerBuild">
            <div className="name">Nom du bâtiment</div>
            <div className="level">Niveau 1</div>
            <img src={buildingImage} alt="Image du bâtiment" width="120" height="120" />
            <div className="stats">
                <div className="column">
                    <span>Gold:</span> 0
                </div>
                <div className="column">
                    <span>Iron:</span> 0
                </div>
                <div className="column">
                    <span>Temps de construction:</span> 15
                </div>
            </div>
            <button className="buyButton" onClick={() => upgrade()}>
                Acheter
            </button>
        </div>
    );
};

export default Building;



const styles = `
/* Building.css */

.containerBuild {
  width: 10vw;
  height: 40vh;
  background-color: grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}

.name {
  text-align: center;
}

.level {
  text-align: center;
}

.stats {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.column {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.buyButton {
  width: 100%;
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.footer {
  text-align: center;
}

`;

const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);
