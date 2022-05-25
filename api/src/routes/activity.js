const { Router } = require("express");
const { postActivity } = require("../handlers/activity")

const router = Router()

router.post("/", postActivity)

module.exports = router