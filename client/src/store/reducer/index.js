import { FETCH_COUNTRIES, FETCH_COUNTRIES_NAME } from "../actions"

const initialState = {
    countries: [],
    filteredCountries: []
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRIES: 
            return {
                ...state,
                countries: action.payload
            }
        case FETCH_COUNTRIES_NAME:
            return {
                ...state,
                countries: action.payload
            }
        default:
            return {...state}
    }
}