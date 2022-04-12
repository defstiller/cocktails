import {useState, useEffect} from "react"

/**
 * If there's data in sessionStorage, use that data, otherwise fetch the data and store it in
 * sessionStorage.
 * @returns An object with two properties: loading and loadedProducts.
 */
function useFetchProducts() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    const [loading, setLoading] = useState(true)
    const [loadedProducts, setProducts] = useState([])
    const data = JSON.parse(window.sessionStorage.getItem("products"))
    const getProducts = async () => {
        if (data) {
            setProducts(data)
            setLoading(false)
            return
        } else {
        const response = await fetch(url)
        const products = await response.json()
        window.sessionStorage.setItem("products", JSON.stringify(products.drinks))
        setLoading(false)
        }
    }
    useEffect(() =>{
        getProducts()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return {loading, loadedProducts}
}

export default useFetchProducts;