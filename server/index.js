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
  const drinkRequest = req.body.drink;
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkRequest}`)
    .then((results) => {
      const drinks = results.data.drinks;
      res.send(drinks);
    })
    .catch((err) => {
      console.log(err);
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
