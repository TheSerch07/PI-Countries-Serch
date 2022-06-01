import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries} from "../store/actions"
import Country from "./Country";

export default function Countries() {
    let countries = useSelector((state) => state.countries)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCountries())
    }, [])
    console.log(countries)
    return (
        <div>
            {countries.map((country) => {
                return <Country key={country.id} name={country.name} flag={country.flag} continent={country.continent} />
            })
            }
        </div>
    )
}