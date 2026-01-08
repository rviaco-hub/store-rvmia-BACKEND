const pool = require('../../config/db')

exports.add = async (req, res) => {
  const { product_id, name, value } = req.body
  await pool.query(
    'INSERT INTO product_attributes(product_id,name,value) VALUES($1,$2,$3)',
    [product_id, name, value]
  )
  res.status(201).json({ message: 'Atributo agregado' })
}
