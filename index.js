const express = require('express');
// const createErr = require('http-errors')
// const cookieParser = require('cookie-parser')
const logger = require('morgan');
const helmet = require('helmet');
const colors = require("colors");
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set("json spaces", 1)

require("./routes/index")(app) //Initializing

app.get('/', async (req, res) => {
  let fs = require("fs");
  let endpoints = []
  fs.readdirSync("./routes").forEach(file => {
    if (file !== "index.js") {
      let endpointNames = file.substr(0, file.indexOf('.'))

      let ee = require(`./routes/${endpointNames}`)
      endpoints.push(`${ee.route}`)
    }
  })
  res.render('html/index.ejs', {
    endpoints: endpoints.join(", ")
  })
})

app.get('*', (req, res) => {
  res.send("<h1> Page Not Found! </h1>")
})

app.use(errorHandler);

app.listen(5000, () => {
  console.log(`[API] - WebServer Listening on PORT 5000`.green)
})