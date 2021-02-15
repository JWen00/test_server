const express = require('express')
const app = express()
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/send', (req, res) => { 
  res.render('send.html')
})

const port = 80
const host = '0.0.0.0'
// const host = 'localhost'
app.listen(port, host,  () => {
  console.log(`Example app listening at http://${host}:${port}`)
})
