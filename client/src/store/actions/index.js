import axios from "axios";

export const FETCH_COUNTRIES = "@countries/fetch_countries"

export function fetchCountries() {
    return function(dispatch) {
        axios.get("http://localhost:3001/country/")
        .then((countries) => {
            dispatch({
                type: FETCH_COUNTRIES,
                payload: countries
            })
        })
        .catch((err) => console.log(err))
    }
};