import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import useFetchProducts from "./useFetchProducts"
function CocktailDetails() {
    const {loading, loadedProducts} = useFetchProducts()
    const {id} = useParams()
    const [drink, setDrink] = useState()
    const [ingredients, setIngredients] = useState([])
    function findDrinkById(products) {
        const foundProduct = products.find( product => product.idDrink === id)
        return foundProduct
    }
    async function getIngredients(drink) {
        const name = "strIngredient"
        const measure = "strMeasure"
        let index = 1
        const ingredients = []
        while(drink[name+index]) { // go through ingredients --- ingredient1 === true = push it into ingredients[], if ingredient2 === false = return ingredients[]
                ingredients.push({ 
                    key:`ingredient${index}`, 
                    ingredientName:drink[name+index],
                    ...(drink[measure+index] && {measure: drink[measure+index]}) //if measure for drink is found add measure
                })

            index += 1
        }
        
        return ingredients
    }
    const startUpPage= async () => { // on page load will get product by matching ID, then get ingredients, will set ingredients is setIngredients, and set full drink in setDrink
        const foundById = await findDrinkById(loadedProducts)
        const foundIngredients = await getIngredients(foundById)
        setIngredients(foundIngredients)
        setDrink(foundById)
    }
    useEffect(() => { // if data is loaded will initialize startUpPage function
        if(loading) { 
            return
        }
        startUpPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loadedProducts])

     if(!drink) {
         return <p>loading</p>
     } else {
     return  <>
        {ingredients.map(ingredient => {
            return <p key={ingredient.key}>{ingredient.ingredientName} {ingredient.measure ? ingredient.measure : "No measurements found"}</p>
        })}
        <figure>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            {drink.strImageAttribution && <figcaption>{drink.strImageAttribution}</figcaption>}
        </figure>
        <p>{drink.strDrink}</p>
        <p>{drink.strAlcoholic}</p>
        <p>{drink.strCategory}</p>
        <p>{drink.strInstructions}</p> 
    </>
     }

        

    
}
export default CocktailDetails