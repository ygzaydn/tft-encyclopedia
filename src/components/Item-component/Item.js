import React from 'react';
import './Item-style.css'

const Item = ({ name, imgId, description,set }) => {
    return (
        <div className="item-card">
            <a className="item-name">{name}</a>
            <img 
                className="item-image"
                src={require(`../../assets/set${set}/items/${imgId}.png`)}
            />
            <a className="item-description">{description}</a>
        </div>
    )
}

export default Item