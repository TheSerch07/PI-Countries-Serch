import axios from "axios";

export const FETCH_COUNTRIES = "@countries/fetch_countries"
export const FETCH_COUNTRIES_NAME = "@countries/fetch_countries_name"
export const ORDER_COUNTRIES = "@countries/order_alp"
export const ORDER_COUNTRIES_POPULATION = "@countries/order_pop"
 
export function fetchCountries() {
    return function(dispatch) {
        axios.get("http://localhost:3001/country/")
        .then((countries) => {
            dispatch({
                type: FETCH_COUNTRIES,
                payload: countries.data
            })
        })
        .catch((err) => console.log(err))
    }
};

export function fetchCountriesName(name) {
    return function(dispatch) {
        axios.get("http://localhost:3001/country/?name=" + name)
        .then((countries) => {
            dispatch({
                type: FETCH_COUNTRIES_NAME,
                payload: countries.data
            })
        })
        .catch((err) => console.log(err))
    }
}

export function orderCountries(ord) {
    return {
        type: ORDER_COUNTRIES,
        payload: ord
    }
}

export function orderCountriesPopulation(ord) {
    return {
        type: ORDER_COUNTRIES_POPULATION,
        payload: ord
    }
}