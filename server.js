const express = require('express');
const axios = require('axios');
app = express();

const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Yay Node! and Hello World');
});

app.get('/request', function (req, res) {
  let searchQuery = req.query.search;  
  res.send(`Yay Node! You searched for ${searchQuery}`);
});

app.get('/json', (req, res) => {
  let lat = req.query.lat;
  let lng = req.query.lng;

  axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`)
    .then(function (response) {
      // handle success
      console.log(response.data);
      res.json(response.data);
    });



  // res.send(`This is the Latitude:${lat} and this is the Longtitude:${lng}`);
})



app.get('/chocolate', (req, res) => {
  res.send('Inez is a chocolate person');
});

app.get('/es6', (req, res) => {
  res.send("() => { 'Inez is a chocolate person' }");
});

app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
