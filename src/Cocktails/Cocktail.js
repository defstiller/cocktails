function Cocktail(props) {
    const {strAlcoholic : isAlcoholic, 
        strCategory : category, 
        strDrink : name, 
        strDrinkThumb : image, 
        strGlass: glassType,
        strInstructions : Instructions,
        strIBA : special,
        strTags : tags,
        strVideo : video} = props //sets new names for default keys

    return <div>
        <img src={image} alt={name}/>
        <p>{name}</p>
        <p>{glassType}</p>
        <p>{isAlcoholic}</p>
        {special && <p>{special}</p>}
        <button>Details</button>
    </div>
}
export default Cocktail;