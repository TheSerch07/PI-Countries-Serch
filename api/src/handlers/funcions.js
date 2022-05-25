const { Country, Activity } = require("../db.js");
const axios = require("axios");

function countryInfoDetail(data) {
    return {
        id: data.cca3,
        name: data.name.official,
        flag: data.flags[0],
        continent: data.continents[0],
        capital: data.capital,
        subregion: data.subregion,
        area: data.area,
        population: data.population
    }
}

async function getCountries() {
    const countryInDb = await Country.findAll()
    if (countryInDb.length < 1) {
        const info = await axios("https://restcountries.com/v3/all")
        let arrayCountries = []
        info.data.forEach((c) => {
            arrayCountries.push(countryInfoDetail(c))
        });
        console.log(arrayCountries)
        await Country.bulkCreate(arrayCountries)
        // return arrayCountries
    }
}

async function getCountriesDb() {
    let countries = await Country.findAll()
    return countries
}

async function getCountriesName(name) {
    const countryDbName = await Country.findOne({
        include: Activity,
        where: {
            name
        }
    })
    return countryDbName
}
// console.log(getCountries())
// console.log(Country.findAll(), "avr")
// console.log(Op, "op?")
module.exports = {
    getCountries,
    getCountriesDb,
    getCountriesName
}