import {Link, useParams} from "react-router-dom"
import useFetchProducts from "./useFetchProducts"
function CocktailDetails() {
    const {id} = useParams()
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    const {products} = useFetchProducts()
    return (
        <p>{id}</p>
    )
}
export default CocktailDetails