import React from 'react'
import './ItemMatrix-style.css'
import ItemMatrixRow from './ItemMatrixRow-component/ItemMatrixRow'
import ItemMatrixColumn from './ItemMatrixColumn-component/ItemMatrixColumn'


const ItemMatrix = ({changeStyle}) => {
    let row = [];
    let counter=0;
    for (let i=0;i<=9;i++){
        row.push(
        <ItemMatrixRow rowNumber={i}>
            <ItemMatrixColumn rowNumber= {i} changeStyle={changeStyle}>{`${i}${counter}`}</ItemMatrixColumn>
            <ItemMatrixColumn rowNumber= {i} changeStyle={changeStyle}>{`${i}${counter+1}`}</ItemMatrixColumn>
            <ItemMatrixColumn rowNumber= {i} changeStyle={changeStyle}>{`${i}${counter+2}`}</ItemMatrixColumn>
            <ItemMatrixColumn rowNumber= {i} changeStyle={changeStyle}>{`${i}${counter+3}`}</ItemMatrixColumn>
            <ItemMatrixColumn rowNumber= {i} changeStyle={changeStyle}>{`${i}${counter+4}`}</ItemMatrixColumn>
            <ItemMatrixColumn rowNumber= {i} changeStyle={changeStyle}>{`${i}${counter+5}`}</ItemMatrixColumn>
            <ItemMatrixColumn rowNumber= {i} changeStyle={changeStyle}>{`${i}${counter+6}`}</ItemMatrixColumn>
            <ItemMatrixColumn rowNumber= {i} changeStyle={changeStyle}>{`${i}${counter+7}`}</ItemMatrixColumn>
            <ItemMatrixColumn rowNumber= {i} changeStyle={changeStyle}>{`${i}${counter+8}`}</ItemMatrixColumn>
            <ItemMatrixColumn rowNumber= {i} changeStyle={changeStyle}>{`${i}${counter+9}`}</ItemMatrixColumn>
        </ItemMatrixRow>)
    }
    return (
        <div className="item-matrix">
            {row}
        </div>
    )
}

export default ItemMatrix