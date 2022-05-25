const { Country, Activity } = require("../db.js");
const axios = require("axios");
const { Op } = require("sequelize")

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
    const countryDbName = await Country.findAll({
        include: Activity,
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    })
    return countryDbName
}

async function getCountriesId(id) {
    id = id.toUpperCase()
    const countryByPk = await Country.findByPk(id, {
        include: {
            model: Activity
        }
    })
    return countryByPk
}

async function postActivityDb({ name, difficulty, duration, season, country}){ 
    const newActivity = await Activity.create({name, difficulty, duration, season})
    const countryDb = await Country.findOne({
        where: {
            id: country
        }
    })
    await newActivity.addCountry(countryDb)
    return newActivity
}

// console.log(getCountries())
// console.log(Country.findAll(), "avr")
// console.log(Op, "op?")
module.exports = {
    getCountries,
    getCountriesDb,
    getCountriesName,
    getCountriesId,
    postActivityDb
}