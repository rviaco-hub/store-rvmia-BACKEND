const pool = require('../../config/db')
const password = require('../../utils/password')

exports.create = async (req, res) => {
  const { name, email, password: pass } = req.body
  const hash = await password.hash(pass)

  await pool.query(
    'INSERT INTO users(name,email,password,role) VALUES($1,$2,$3,$4)',
    [name, email, hash, 'client']
  )

  res.status(201).json({ message: 'Usuario creado' })
}
