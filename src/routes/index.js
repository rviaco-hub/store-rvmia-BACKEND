const router = require('express').Router()
const auth = require('../middlewares/auth.middleware')

router.post('/auth/login', require('../modules/auth/auth.controller').login)
router.post('/users', require('../modules/users/users.controller').create)

router.get('/categories', require('../modules/categories/categories.controller').list)
router.post('/categories', auth, require('../modules/categories/categories.controller').create)

router.get('/products', require('../modules/products/products.controller').list)
router.post('/products', auth, require('../modules/products/products.controller').create)

router.post('/attributes', auth, require('../modules/attributes/attributes.controller').add)

router.post('/orders', auth, require('../modules/orders/orders.controller').create)
router.post('/payments', auth, require('../modules/payments/payments.controller').register)

router.post('/inventory', auth, require('../modules/inventory/inventory.controller').adjust)

module.exports = router
