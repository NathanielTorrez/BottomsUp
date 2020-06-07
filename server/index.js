// ==================== Require Server Dependencies ========
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// =================== MiddleWare =========================
app.use(bodyParser.json());
//================== Routes ==============================
app.get('/', (req, res) => {
  const drinkRequest = req.query.drink;
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkRequest}`)
    .then((results) => {
      const drinks = results.data.drinks;
      res.send(drinks);
    })
    .catch((err) => {
      console.log('error');
      res.send(err);
    });
});

app.get('/drink', (req, res) => {
  const drinkRequest = req.query.drink;
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkRequest}`)
    .then((results) => {
      const drinks = results.data.drinks[0];
      res.send(drinks);
    })
    .catch((err) => {
      console.log('error');
      res.send(err);
    });
});

// ====================== Listen on this port ==============
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Up and running on local host port ${port}`);
  }
});
