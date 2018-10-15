const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db')
const dogeController = require('./controllers/doge');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));


app.use('/doge', dogeController);
const Doge = require('./models/doge');
// all dogs created go to index page


app.listen(3000, () => {
	console.log('server listening on port 3000');
})