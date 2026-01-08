const pool = require('../../config/db')

exports.list = async (req, res) => {
  const data = await pool.query('SELECT * FROM categories')
  res.json(data.rows)
}

exports.create = async (req, res) => {
  const { name, type } = req.body
  await pool.query(
    'INSERT INTO categories(name,type) VALUES($1,$2)',
    [name, type]
  )
  res.status(201).json({ message: 'Categoría creada' })
}
