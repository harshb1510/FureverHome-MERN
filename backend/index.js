const connectToMongo = require("./db");
const express = require('express')

connectToMongo();

const app = express()
const port = 5000

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  next();
})

//Available Routes
app.use('/api/auth',require('./routes/auth'));




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})