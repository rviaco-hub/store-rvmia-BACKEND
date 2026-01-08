const jwt = require('jsonwebtoken')

exports.sign = payload =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' })

exports.verify = token =>
  jwt.verify(token, process.env.JWT_SECRET)
