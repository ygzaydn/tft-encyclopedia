import React from 'react'
import './ItemMatrixColumn-style.css'

const ItemMatrixColumn = ({children, changeStyle, rowNumber}) => {

    let par;
    children<=10 ? par=children : par=children;
    let isOpen=false;
    console.log(isOpen);
    return (
        <div className="item-matrix-row">
            <a className={`item-matrix-column row-${rowNumber} column-${par%10}`} onClick={changeStyle}>
                <img 
                    className={`item-image-column`}
                    id={par}
                    src={require(`../../../assets/items/${parseInt(par)}.png`)}
                    onClick={()=> {isOpen=par; console.log(isOpen)} }
                />
            </a>
        </div>
    )
}

export default ItemMatrixColumn