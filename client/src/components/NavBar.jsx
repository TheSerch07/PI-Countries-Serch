import Order from "./Order";
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        <nav>
            <SearchBar />
            <Order />
        </nav>
    )
}