import React from 'react'
import '../App.css'

function Recipe({ title , cal , image , ingredants }) {
    return (
        <div className="recipies">
            <h1 className="heading" > {title}</h1>
            <img className="img" src={image} alt="" />
            <p className="cal">Calories : {cal}</p>
            <h2 className="heading" >Ingredients</h2>
            <ol className="ol" >
                {ingredants.map(ingredant => (
                    <li>{ingredant.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe
