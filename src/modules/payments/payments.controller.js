const pool = require('../../config/db')

exports.register = async (req, res) => {
  const { order_id, method, reference } = req.body

  await pool.query(
    'INSERT INTO payments(order_id,method,reference,status) VALUES($1,$2,$3,$4)',
    [order_id, method, reference, 'pending']
  )

  res.status(201).json({ message: 'Pago registrado' })
}
