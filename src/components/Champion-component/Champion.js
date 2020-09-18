import React from 'react';
import './Champion-style.css'

const Champion = ({ name, cost, traits, set }) => {
    return (
    <div className="char-card" >
        <a className="char-name">{name}</a>
        <img 
            className="char-image" 
            src={require(`../../assets/set${set}/champions/${name.toLowerCase().split(' ').join('')}.png`)} 
        />
        <a className="char-cost">{`${cost} GOLD`}</a>
        <div className="char-traits">{traits.map(el => {
            return (
                <div 
                    className="char-trait"
                    key={el}>
                        {el}
                </div>
            )
        })}
        </div>

    </div>
    )
}

export default Champion;