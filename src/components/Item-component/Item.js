import React from 'react';
import './Item-style.css'

const Item = ({ name, imgId }) => {
    return (
        <div className="item-card">
            <a className="item-name">{name}</a>
            <img 
                className="item-image"
                src={require(`../../assets/items/${imgId}.png`)}
            />            
        </div>
    )
}

export default Item