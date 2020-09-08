import React from 'react'
import './ItemMatrixRow-style.css'


const ItemMatrixRow = ({children, rowNumber}) => {
    const rowNum = `row-${rowNumber}`
    return (
        <div className={`item-matrix-row ${rowNum}`}>
            {children}
        </div>
    )
}

export default ItemMatrixRow