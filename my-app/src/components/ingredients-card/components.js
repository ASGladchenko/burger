import './styles.scss'

const IngredientsCard = (ingredient) => {
    return (
        <div className='card_ingredient'>
            <img src={require(`../../` + ingredient.path)} alt={ingredient.name}/>
            <p>{ingredient.name}</p>
        </div>
    )
}
export default IngredientsCard