import {useState, useEffect, useMemo} from 'react'
import useFetchCocktails from "./useFetchCocktails"
import Cocktail from "./Cocktail"
/**
 * It fetches the data from the API and displays the results.
 * @returns A loading indicator and a list of cocktails.
 */
function CocktailsList() {
        const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
        const {loading, cocktails} = useFetchCocktails(baseUrl)
        const drinkList = cocktails.drinks

    return <>
        {loading}
        {drinkList && drinkList.map(drink => {
            return <Cocktail key={drink.idDrink} {...drink} />
        })}
    </>
}
export default CocktailsList;