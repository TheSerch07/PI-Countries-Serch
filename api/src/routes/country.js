const { Router } = require("express");
const { getCountry, getCountryId} = require("../handlers/country");

const router = Router();

router.get("/", getCountry)
router.get("/:id", getCountryId)

module.exports = router;