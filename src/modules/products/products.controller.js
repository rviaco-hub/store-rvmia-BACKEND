const pool = require('../../config/db')

exports.list = async (req, res) => {
  const data = await pool.query('SELECT * FROM products')
  res.json(data.rows)
}

exports.create = async (req, res) => {
  const { name, price, stock, category_id } = req.body
  await pool.query(
    'INSERT INTO products(name,price,stock,category_id) VALUES($1,$2,$3,$4)',
    [name, price, stock, category_id]
  )
  res.status(201).json({ message: 'Producto creado' })
}
