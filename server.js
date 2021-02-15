const express = require('express')
const app = express()
const port = 80
const host = '3.137.179.76'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})
