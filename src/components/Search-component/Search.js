import React from 'react';

import './Search-style.css';

const Search = ({ placeholder, searchText, searchFunction}) => {
    return (
        <input 
            type="text"
            placeholder={placeholder}
            value={searchText}
            onChange={searchFunction}
        />  
    )
}

export default Search