const { Router } = require("express");
const { getCountry} = require("../handlers/country");

const router = Router();

router.get("/", getCountry)

module.exports = router;