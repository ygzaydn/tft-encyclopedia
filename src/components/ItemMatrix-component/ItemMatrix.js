import React from 'react'
import './ItemMatrix-style.css'
import ItemMatrixRow from './ItemMatrixRow-component/ItemMatrixRow'
import ItemMatrixColumn from './ItemMatrixColumn-component/ItemMatrixColumn-component'


const ItemMatrix = ({item}) => {
    console.log(item)
    return (
        <div className="item-matrix">
            <ItemMatrixRow>
                <ItemMatrixColumn>asd</ItemMatrixColumn>
                <ItemMatrixColumn>dsa</ItemMatrixColumn>
            </ItemMatrixRow>
            <ItemMatrixRow>
                <ItemMatrixColumn>1</ItemMatrixColumn>
                <ItemMatrixColumn>2</ItemMatrixColumn>
            </ItemMatrixRow>
        </div>
    )
}

export default ItemMatrix