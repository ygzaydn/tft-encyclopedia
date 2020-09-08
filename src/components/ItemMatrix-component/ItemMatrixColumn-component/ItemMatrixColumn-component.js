import React, {useRef} from 'react'
import './ItemMatrixColumn-style.css'


const ItemMatrixColumn = ({children}) => {
    let par;
    children%10===0? par=children/10 : par=children;
    const inputRef = useRef(par);
    return (
        <a className="item-matrix-column">
            <img 
                className="item-image-column"
                id={par}
                src={require(`../../../assets/items/${parseInt(par)}.png`)}
                onClick={(event)=> console.log(event.target.id)}
                ref={inputRef}
            />
        </a>
    )
}

export default ItemMatrixColumn