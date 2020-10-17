const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');


//app.use is middleware
//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));//this tells it to parse the data as deeply as it can
//parse incoming json data
app.use(express.json());
//allow front end files to be readily available
app.use(express.static('public'));
//this tells the app to search for these routes
app.use('/api', apiRoute);
app.use('/', htmlRoute);


//this is the server itself
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
