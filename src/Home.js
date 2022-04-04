import Search from "./Search/Search"; 
import CocktailsList from "./Cocktails/CocktailsList"
function Home() {
    return (
        <main>
            <Search/>
            <CocktailsList />
        </main>
    )
}
export default Home;