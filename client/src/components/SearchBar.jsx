import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchCountriesName } from "../store/actions"

export default function SearchBar() {
    const [search, setSearch] = useState("")
    let dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault()
        dispatch(fetchCountriesName(search))
    }
    
    function onInputChange(e) {
        setSearch(e.target.value)
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name Country" onChange={onInputChange}/>
                <input type="submit" value="Search Country!" />
            </form>
        </div>
    )
}