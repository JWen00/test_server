const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, 'ec2-3-137-179-76.us-east-2.compute.amazonaws.com', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
