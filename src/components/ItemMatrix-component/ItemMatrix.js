import React from 'react'
import './ItemMatrix-style.css'
import ItemMatrixRow from './ItemMatrixRow-component/ItemMatrixRow'
import ItemMatrixColumn from './ItemMatrixColumn-component/ItemMatrixColumn-component'


const ItemMatrix = ({}) => {
    let row = [];
    let counter=1;
    for (let i=1;i<=9;i++){
        row.push(
        <ItemMatrixRow>
            <ItemMatrixColumn>{`${i}${counter}`}</ItemMatrixColumn>
            <ItemMatrixColumn>{`${i}${counter+1}`}</ItemMatrixColumn>
            <ItemMatrixColumn>{`${i}${counter+2}`}</ItemMatrixColumn>
            <ItemMatrixColumn>{`${i}${counter+3}`}</ItemMatrixColumn>
            <ItemMatrixColumn>{`${i}${counter+4}`}</ItemMatrixColumn>
            <ItemMatrixColumn>{`${i}${counter+5}`}</ItemMatrixColumn>
            <ItemMatrixColumn>{`${i}${counter+6}`}</ItemMatrixColumn>
            <ItemMatrixColumn>{`${i}${counter+7}`}</ItemMatrixColumn>
            <ItemMatrixColumn>{`${i}${counter+8}`}</ItemMatrixColumn>
        </ItemMatrixRow>)
    }
    console.log(row)
    return (
        <div className="item-matrix">
            {row}
        </div>
    )
}

export default ItemMatrix