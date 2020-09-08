import React from 'react'
import './ItemMatrixColumn-style.css'


const ItemMatrixColumn = ({children}) => {
    return (
        <div className="item-matrix-column">
            <img 
                className="item-image-column"
                src={require(`../../../assets/items/${children}.png`)}
            />
        </div>
    )
}

export default ItemMatrixColumn