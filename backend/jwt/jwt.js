require("dotenv").config()

const jwt = require("jsonwebtoken")
const jwtkey = process.env.JWT_SECRET

module.exports = {jwt,jwtkey}
