import React, {useRef} from 'react'
import './ItemMatrixColumn-style.css'


const ItemMatrixColumn = ({children, changeStyle}) => {
    let par;
    children<=10 ? par=children : par=children;
    console.log(children)
    const inputRef = useRef(par);
    return (
        <a className="item-matrix-column" onClick={changeStyle}>
            <img 
                className={`item-image-column row-${par%10}`}
                id={par}
                src={require(`../../../assets/items/${parseInt(par)}.png`)}
                ref={inputRef}
            />
        </a>
    )
}

export default ItemMatrixColumn