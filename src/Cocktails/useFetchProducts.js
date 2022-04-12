import {useState, useEffect} from "react"
import sessionStorage from "./sessionStorage"

/**
 * If the data is in session storage, set the products to the data in session storage. If the data is
 * not in session storage, fetch the data from the API and set the products to the data from the API.
 * </code>
 * @returns The data is being returned from the sessionStorage.
 */
function useFetchProducts() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    const [loading, setLoading] = useState(true)
    const [loadedProducts, setProducts] = useState()
    const {getSessionStorage, setSessionStorage} = sessionStorage()
    const data = getSessionStorage("products")
  
    const getProducts = async () => {
        if (data) { // if session storage exist set products as session storage, set loading false
            setProducts(data)
            setLoading(false)
            return
        } else { // else fetch new products
        const response = await fetch(url)
        const products = await response.json()
        setSessionStorage("products", products.drinks)
        console.log(loadedProducts)
        setLoading(false)
        }
    }
    useEffect(() =>{
        getProducts()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return {loading, loadedProducts}
}

export default useFetchProducts;