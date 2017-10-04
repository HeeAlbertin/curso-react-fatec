import React from 'react'
import '../styles/components/recipe.css'
import defaultImage from '../images/default-image.svg'

const Recipe = (recipe) => {
    return (
        <div className="recipe">
            <img
                alt=""
                src={ recipe.thumbnail || defaultImage }
                width="80"
                height="80"
            />

            <div className="recipe__info">
                <h3 className="recipe__title">{ recipe.title }</h3>

                <p className="recipe__ingredients">
                    <strong>Ingredientes: </strong>
                    { recipe.ingredients }
                </p>
            </div>
        </div>
    )
} 
 
export default Recipe