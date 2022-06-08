import { ASC, MIN } from "../../components/Order"
import { FETCH_COUNTRIES, FETCH_COUNTRIES_NAME, FILTER_COUNTRIES_CONTINENT, ORDER_COUNTRIES, ORDER_COUNTRIES_POPULATION, POST_ACTIVITY } from "../actions"

const initialState = {
    countries: [],
    filteredCountries: [],
    nameFiltered: []
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRIES: 
            return {
                ...state,
                countries: action.payload,
                filteredCountries: action.payload
            }
        case FETCH_COUNTRIES_NAME:
            return {
                ...state,
                filteredCountries: action.payload,
                nameFiltered: action.payload
            }
        case ORDER_COUNTRIES: 
            let orderCountriesName = [...state.filteredCountries]
            orderCountriesName = orderCountriesName.sort((a, b) => {
                // console.log(a, "aa")
                if (a.name < b.name) {
                    return action.payload === ASC ? -1 : 1
                }
                if (a.name > b.name) {
                    return action.payload === ASC ? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                filteredCountries: orderCountriesName
            }
        case ORDER_COUNTRIES_POPULATION: 
            let orderCountriesPop = [...state.filteredCountries]
            console.log(orderCountriesPop, "k?")
            orderCountriesPop = orderCountriesPop.sort((a, b) => {
                if (a.population < b.population) {
                    return action.payload === MIN ? -1 : 1
                }
                if (a.population > b.population) {
                    return action.payload === MIN ? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                filteredCountries: orderCountriesPop

            }
        case FILTER_COUNTRIES_CONTINENT: 
            let filterCountries = state.countries
            // console.log(action.payload, "el pay")

            let continentCountries = action.payload === "All" ? filterCountries : filterCountries.filter((con) => con.continent === action.payload)
            return {
                ...state,
                filteredCountries: continentCountries
            }
        case POST_ACTIVITY: 
            return {
                ...state
            }  
        default:
            return {...state}
    }
}