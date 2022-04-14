import {useState, useEffect, useCallback, useRef} from "react"
import {useLocation} from "react-router-dom"
function CocktailDetails() {
    const location = useLocation()
    const [ingredients, setIngredients] = useState([])
    function getIngredients() {
        const name = "strIngredient"
        let index = 1
        while(location.state.props[name+index]) {
            const ingredientName = location.state.props[name+index]
            setIngredients(steps => [...steps, ingredientName])
            index += 1
        }
        return index
    }
    useEffect(() => {
        getIngredients()
    },[])

    const {
        strAlcoholic : isAlcoholic, 
        strCategory : category, 
        strDrink : name, 
        strDrinkThumb : image, 
        strGlass: glassType,
        strInstructions : instructions,
        strIBA : special,
        strTags : tags,
        strVideo : video,
        strDrinkAlternate : alternate,
        strCreativeCommonsConfirmed : creativeCommons,
        strImageAttribution : imageAttribution,
     } = location.state.props 
     return  <>
        <figure>
            <img src={image} alt={name} />
            {imageAttribution && <figcaption>{imageAttribution}</figcaption>}
        </figure>
        {video && <video controls autoplay muted src={video}>
            Your browser does not support the video tag.
        </video> }
        <p>{name}</p>
        {ingredients.map(step => <p key={Math.random() * 300}>{step}</p>)}
        <p>{isAlcoholic}</p>
        <p>{category}</p>
        <p>{instructions}</p>
    </>

        

    
}
export default CocktailDetails