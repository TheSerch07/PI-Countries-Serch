const { postActivityDb} = require("./funcions")

const postActivity = async (req, res, next) => {
    try {
        const values = req.body
        const createActivity = await postActivityDb(values)
        console.log(createActivity, "jeje")
        createActivity.dataValues? res.send({msg: "Activity created!"}) : res.status(400).send({msg: "Enter the data correctly"})
    } catch (err) {
        next(err)
    }
}

module.exports = {
    postActivity
}