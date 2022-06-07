import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries} from "../store/actions"
import Country from "./Country";
import Pagination from "./Pagination";

export default function Countries() {
    let countries = useSelector((state) => state.filteredCountries)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCountries())
    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const indexOfLast = currentPage * countriesPerPage
    const indexOfFirst = indexOfLast - countriesPerPage
    const currentCountries = countries.slice(indexOfFirst, indexOfLast)

    function pagination(pageNumber) {
        setCurrentPage(pageNumber)
    }
    
    console.log(countries, "countries del componente countries")
    return (
        <div>
            <Pagination countriesPerPage={countriesPerPage} countries={countries.length} pagination={pagination} />
            {currentCountries.map((country) => {
                return <Country key={country.id} name={country.name} flag={country.flag} continent={country.continent} />
            })
            }
            <Pagination countriesPerPage={countriesPerPage} countries={countries.length} pagination={pagination} />
        </div>
    )
}