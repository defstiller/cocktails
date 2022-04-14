import {Link} from "react-router-dom"
function Cocktail(props) {
    const {
        strAlcoholic : isAlcoholic, 
        strCategory : category, 
        strDrink : name, 
        strDrinkThumb : image, 
        strGlass: glassType,
        strIBA : special,
        idDrink : id} = props //sets new names for default keys

    return <div>
        <img src={image} alt={name}/>
        <p>{name}</p>
        <p>{glassType}</p>
        <p>{isAlcoholic}</p>
        {special && <p>{special}</p>}
        <Link to={`/product/${id}`} state={{props}}><button>Details</button></Link>
    </div>
}
export default Cocktail;