import { useDispatch } from "react-redux"
import { fetchCountries, orderCountries, orderCountriesPopulation, filterCountriesContinent } from "../store/actions"

export const ASC = "A-Z"
export const DES = "Z-A"
export const MIN = "Min"
export const MAX = "Max"

export default function Order() {
    const dispatch = useDispatch()

    function onSelectAlpChange(e) {
        dispatch(orderCountries(e.target.value))
    }
    
    function onSelectPopChange(e) {
        dispatch(orderCountriesPopulation(e.target.value))
    }

    function onFilterCont(e) {
        dispatch(filterCountriesContinent(e.target.value))
    }
    
    function reloadCountries() {
        dispatch(fetchCountries())
    }

    return (
        <div>
        <button onClick={reloadCountries}>Reload Countries</button>
        <select name="orderAlp" onChange={onSelectAlpChange}>
            <option value={ASC}>A-Z</option>
            <option value={DES}>Z-A</option>
        </select>
        <select name="orderPop" onChange={onSelectPopChange}>
            <option value={MIN}>Min</option>
            <option value={MAX}>Max</option>
        </select>
        <select name="filterCon" onChange={onFilterCont}>
            <option value="All">All</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Africa">Africa</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
            <option value="Antarctica">Antarctica</option>
        </select>
        </div>
)}