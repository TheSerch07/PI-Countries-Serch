import { useDispatch } from "react-redux"
import { orderCountries, orderCountriesPopulation } from "../store/actions"

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

    return (
        <div>
        <select name="orderAlp" onChange={onSelectAlpChange}>
            <option value={ASC}>A-Z</option>
            <option value={DES}>Z-A</option>
        </select>
        <select name="orderPop" onChange={onSelectPopChange}>
            <option value={MIN}>Min</option>
            <option value={MAX}>Max</option>
        </select>
        </div>
)}