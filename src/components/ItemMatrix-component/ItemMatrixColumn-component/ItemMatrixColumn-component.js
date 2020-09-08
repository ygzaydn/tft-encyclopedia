import React from 'react'
import './ItemMatrixColumn-style.css'


const ItemMatrixColumn = ({children}) => {
    let par;
    children%10==0? par=children/10 : par=children;
    return (
        <div className="item-matrix-column">
            <img 
                className="item-image-column"
                src={require(`../../../assets/items/${parseInt(par)}.png`)}
            />
        </div>
    )
}

export default ItemMatrixColumn