import React from "react";
import "../../styles/componentStyle/Technology/TechnologyCardStyle.scss";


const TechnologyCard = ({ technology }) => {

    const onPress = () => {
        console.log("test")
    }

    return (
        <div className="technology-card">
            <img src={technology.image} alt={technology.name} className="technology-image" />
            <div className="technology-details">
                <div>{technology.name}</div>
                <div>Niveau {technology.level}</div>
            </div>
            <div className="technology-resources">
                <div className="technology-resource">Coût Gold: {technology.costGold}</div>
                <div className="technology-resource">Coût Orinia: {technology.costOrinia}</div>
                <div className="technology-resource">Coût Métaux: {technology.costMetals}</div>
                <div className="technology-resource">Coût Orinium: {technology.costOrinium}</div>
                <div className="technology-resource">Coût Énergie: {technology.costEnergy}</div>
                <div className="technology-resource">Coût Scientist: {technology.costScientist}</div>
            </div>
            <div className="technology-time-upgrade">
                Temps: {technology.timeUpgrade}
            </div>
            <div className="upgrade-button" onClick={onPress}>Upgrade</div>
        </div>
    );
};

export default TechnologyCard;
