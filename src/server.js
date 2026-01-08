require('./config/env')
const app = require('./app')

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`🚀 Backend RVMIA STORE corriendo en puerto ${PORT}`)
})
