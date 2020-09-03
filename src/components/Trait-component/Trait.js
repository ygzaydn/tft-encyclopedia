import React from 'react'
import './Trait-style.css'

const Trait = ({name, imgId, description}) => {
    if(imgId.includes('Set3_')){
        imgId = imgId.slice(5);
    }
    imgId = imgId.toLowerCase();
    return (
        <div className="trait-card">
            <a className="trait-name">{name}</a>
            <img 
                className="trait-image"
                src={require(`../../assets/traits/${imgId}.png`)}
            />
            <a className="trait-description">{description}</a>
        </div>
    )
}

export default Trait