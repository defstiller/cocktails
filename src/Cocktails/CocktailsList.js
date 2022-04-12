import useFetchProducts from "./useFetchProducts"
import Cocktail from "./Cocktail"
import sessionStorage from "./sessionStorage"
/**
 * It fetches the data from the API and displays the results.
 * @returns A loading indicator and a list of cocktails.
 */
function CocktailsList() {
        const {getSessionStorage} = sessionStorage()
        const {loading, loadedProducts} = useFetchProducts()  
        const data = JSON.parse(window.sessionStorage.getItem("products"))
/* Returning the loading indicator while fetch is getting data, and then shows list of cocktails. */
    return <>
        {loading ? 
        <img src="../loader.svg" alt="Loading"/> : 
        data.map(drink => {
            return <Cocktail key={drink.idDrink} {...drink} />})} 
        </>


}
export default CocktailsList;