import React from 'react'
import './ItemMatrixColumn-style.css'


const ItemMatrixColumn = ({children}) => {
    return (
        <div className="item-matrix-column">
            {children}
        </div>
    )
}

export default ItemMatrixColumn