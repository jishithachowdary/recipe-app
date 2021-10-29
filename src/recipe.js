import React from 'react';
import style from './recipe.module.css';
const Recipe=({title,calories,ingi,image})=>{
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <img src={image} alt="" />
            <p>{calories}</p>
            <ol>
                {ingi.map(i=>(<li>{i.text}</li>))}
            </ol>
        </div>
    );
}

export default Recipe;