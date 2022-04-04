import {useState, useEffect, useMemo} from 'react'
import useFetchCocktails from "./useFetchCocktails"
import Cocktail from "./Cocktail"
import useFetch from "react-fetch-hook"
/**
 * It fetches the data from the API and displays the results.
 * @returns A loading indicator and a list of cocktails.
 */
function CocktailsList() {
        const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
        const {isLoading, data = []} = useFetch(baseUrl, {},[])
        const dataArray = data.drinks
        console.log(isLoading)


if(isLoading) {
            return <img src="../loader.svg" alt="Loading"/> 
        }else ( dataArray.map(drink => {
            return <Cocktail key={drink.idDrink} {...drink} />
        }))

}
export default CocktailsList;