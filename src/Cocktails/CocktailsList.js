import {useEffect, useState, useRef} from "react"
import useFetchProducts from "./useFetchProducts"
import Cocktail from "./Cocktail"
/**
 * It fetches the data from the API and displays the results.
 * @returns A loading indicator and a list of cocktails.
 */
function CocktailsList() {
        const {loading, loadedProducts} = useFetchProducts()  
        const [searchResult, setSearchResult] = useState(loadedProducts)
        const [searchInput, setSearchInput] = useState('')
        function handleInputChange(e) {
            const userInput = e.target.value
            setSearchInput(userInput)
        }
        function handleSearch() {
            if(searchInput) {
                const filteredItems = []
                const search = searchInput.toLowerCase()
                loadedProducts.map(drink => {
                    const drinkName = drink.strDrink.toLowerCase()
                    if (drinkName.includes(search)) {
                    filteredItems.push(drink)
                    }
                    return false
                })
                    setSearchResult(filteredItems)
            } else {
                setSearchResult(loadedProducts)
            }
        }
        useEffect(() => {
            handleSearch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [searchInput])
        useEffect(() => {
            setSearchResult(loadedProducts)
        }, [loadedProducts])

/* Returning the loading indicator while fetch is getting data, and then shows list of cocktails. */
    return <>
        <input placeholder="Search for" value={searchInput} onChange={e => handleInputChange(e)}></input>
        {loading ? 
        <img src="../loader.svg" alt="Loading"/> : 
         searchResult && searchResult.map(drink => {
        // loadedProducts.map(drink => {
            return <Cocktail key={drink.idDrink} {...drink} />})} 
        
        </>


}
export default CocktailsList;