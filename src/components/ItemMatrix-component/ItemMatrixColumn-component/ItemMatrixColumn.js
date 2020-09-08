import React, {useRef} from 'react'
import './ItemMatrixColumn-style.css'


const ItemMatrixColumn = ({children, changeStyle, rowNumber}) => {
    let par;
    children<=10 ? par=children : par=children;
    const inputRef = useRef(par);
    return (
        <a className={`item-matrix-column row-${rowNumber} column-${par%10}`} onClick={changeStyle}>
            <img 
                className={`item-image-column`}
                id={par}
                src={require(`../../../assets/items/${parseInt(par)}.png`)}
                ref={inputRef}
            />
        </a>
    )
}

export default ItemMatrixColumn