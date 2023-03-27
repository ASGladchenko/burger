import React, { useState } from "react";

import './styles.scss'

const BurgerCard = ({burger}) => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <div className='burger_card_wrapper'>
            <div className={isOpen ? 'pos_abs burger_card' : 'burger_card'}>
                <h5>{burger.name}</h5>
                <div className="burger_card_img">
                    <img src={require('../../../'+burger.path)} alt={"img_"+burger.name}/>
                </div>

                {isOpen && (
                    <div className='burger_card_ingredients'>
                        <h6>Ingredient</h6>
                        {burger.ingredients.map(ingredient=>(
                            <div className='burger_card_ingredient' key={ingredient.ingredients_id}>
                                <div className='burger_ingredient_wrapper' key={ingredient.ingredients_id}>
                                    <span >{ingredient.name}</span>
                                    <div className='burger_ingredient_img'>
                                        <img src={require('../../../'+ingredient.path)} alt={ingredient.name}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <span className='burger_card_open' onClick={()=>setIsOpen(!isOpen)}>
                {isOpen ? 'Reduce' : 'Details'}
            </span>
            </div>
        </div>

    )
}
export default BurgerCard