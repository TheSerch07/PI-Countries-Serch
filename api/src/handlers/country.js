const { getCountries, getCountriesDb, getCountriesName, getCountriesId } = require("./funcions");

const getCountry = async (req, res, next) => {
    try {
        const { name } = req.query;
        await getCountries()
        if (name) {
            const countryInDbName = await getCountriesName(name)
            return res.status(200).json(countryInDbName)
        } else {
            const countryInDb = await getCountriesDb()
            // console.log(countryInDb)
            res.status(200).json(countryInDb)
        }
    } catch (err) {
        next(err)
    }
}

const getCountryId = async (req, res, next) => {
    try {
        const { id } = req.params
        // console.log(id)
        const countryInDbId = await getCountriesId(id)
        res.status(200).json(countryInDbId)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getCountry,
    getCountryId
}