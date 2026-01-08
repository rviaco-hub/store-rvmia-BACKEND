const pool = require('../../config/db')

exports.create = async (req, res) => {
  const { items, total } = req.body

  const order = await pool.query(
    'INSERT INTO orders(user_id,total) VALUES($1,$2) RETURNING id',
    [req.user.id, total]
  )

  for (const item of items) {
    await pool.query(
      'INSERT INTO order_items(order_id,product_id,qty,price) VALUES($1,$2,$3,$4)',
      [order.rows[0].id, item.product_id, item.qty, item.price]
    )
  }

  res.status(201).json({ message: 'Pedido creado' })
}
