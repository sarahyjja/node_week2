const http = require('http')
const router = require('./router.js')
const hostname = process.env.HOSTNAME || 'localhost'
const port = process.env.PORT || 4000


http.createServer().listen(port, hostname, () => {
  console.log(`The server is running at port http://${hostname} : ${port}`)
})
