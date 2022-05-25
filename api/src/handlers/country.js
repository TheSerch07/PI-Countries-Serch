const { getCountries, getCountriesDb, getCountriesName } = require("./funcions");

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

module.exports = {
    getCountry
}