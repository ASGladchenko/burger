import React, {useState} from "react";

import './styles.scss'

const BurgerCardTurn = ({burger}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='burger_wrapper_turn' style={{flexWrap: 'wrap'}}>
            <div className={isOpen ?'burger_card_front card_turn' :'burger_card_front'}>
                <h5>{burger.name}</h5>
                <div className="burger_card_img">
                    <img src={require('../../../' + burger.path)} alt={"img_" + burger.name}/>
                </div>
                <span className='burger_card_open' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Reduce' : 'Details'}
            </span>
            </div>
            <div className={isOpen ?'burger_card_back card_turn' :'burger_card_back'}>
                <h5>Ingredient's</h5>
                <div className='ingredients'>
                    {burger.ingredients.map(ingredient => (
                        <div className='burger_ingredient_wrapper' key={ingredient.ingredients_id}>
                            <span >{ingredient.name}</span>
                            <div className='burger_ingredient_img'>
                                <img src={require('../../../'+ingredient.path)} alt={ingredient.name}/>
                            </div>
                        </div>
                    ))}
                </div>
                <span className='burger_card_open' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Reduce' : 'Details'}
            </span>
            </div>
        </div>

    )
}
export default BurgerCardTurn
