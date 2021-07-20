import React from 'react'
import './Search-box-style.css'

const SearchBox = ({placeholder, handleChange}) => {

    return(
        <input 
        className='search' 
        onChange={handleChange} 
        type='search' 
        placeholder={placeholder}
        />
    )
}

export {SearchBox}