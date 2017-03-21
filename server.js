'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const ev = require('express-validation')
const cookieParser = require('cookie-parser')

const PORT = process.env.port || 8080;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
app.use(morgan('short'));
app.disable('x-powered-by');


const users = require('./api/controllers/users');
const favorites = require('./api/controllers/favorites');
const favorite = require('./api/controllers/favorite');
const wishlist = require('./api/controllers/wishlist');
const search = require('./api/controllers/search');
const token = require('./api/controllers/token')


app.use(users);
app.use(favorites);
app.use(favorite);
app.use(wishlist);
app.use(search);
app.use(token);



app.listen(PORT, () => {
  console.log('App is listening on port ' + PORT);
});

module.exports = app
