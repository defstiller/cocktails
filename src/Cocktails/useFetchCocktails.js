import {useState, useCallback, useEffect} from "react"
//Gets data from url, sets loading state for load svg, and sets data in cocktails, loading and cocktails are
// used in CocktailsList.js
function useFetchCocktails(url) {
    const [loading, setLoading] = useState(true)
    const [cocktails, setCocktails] = useState()
    const getCocktails = useCallback(async() => {
        const response = await fetch(url)
        const cocktailList = await response.json()
        setCocktails(cocktailList)
        setLoading(false)
    }, [url])

    useEffect(() => {
        getCocktails();
    }, [url, getCocktails])
    return {cocktails, loading}
}

export default useFetchCocktails;