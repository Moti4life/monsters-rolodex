import React from 'react'
import './card-style.css'


const Card = (props) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${30 + props.monster.id}?set=set2&size=180x180`} alt="monster"  />
            <h2>{props.monster.name}</h2>
            <h3>{props.monster.email}</h3>
        </div>
    )
}



export {Card}