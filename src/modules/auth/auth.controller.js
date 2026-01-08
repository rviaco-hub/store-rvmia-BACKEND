const pool = require('../../config/db')
const password = require('../../utils/password')
const jwt = require('../../utils/jwt')

exports.login = async (req, res) => {
  const { email, password: pass } = req.body

  const user = await pool.query(
    'SELECT * FROM users WHERE email=$1',
    [email]
  )

  if (!user.rows.length)
    return res.status(401).json({ message: 'Credenciales inválidas' })

  const valid = await password.compare(pass, user.rows[0].password)
  if (!valid)
    return res.status(401).json({ message: 'Credenciales inválidas' })

  const token = jwt.sign({
    id: user.rows[0].id,
    role: user.rows[0].role
  })

  res.json({ token })
}
