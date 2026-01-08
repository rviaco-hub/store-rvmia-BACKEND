const pool = require('../../config/db')

exports.adjust = async (req, res) => {
  const { product_id, stock } = req.body

  await pool.query(
    'UPDATE products SET stock=$1 WHERE id=$2',
    [stock, product_id]
  )

  res.json({ message: 'Stock actualizado' })
}
