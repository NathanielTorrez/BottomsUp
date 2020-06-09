// ==================== Require Server Dependencies ========
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('../database/index.js');

// =================== MiddleWare =========================
app.use(bodyParser.json());
//================== Routes ==============================
app.get('/', (req, res) => {
  const drinkRequest = req.query.drink;
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkRequest}`)
    .then((results) => {
      const drinks = results.data.drinks;
      let filteredDrinks = [];
      drinks.map((drink) => {
        let name = drink.strDrink;

        if (
          name.includes('sex') ||
          name.includes('Asshole') ||
          name.includes('Zipperhead') ||
          name.includes('FUK')
        ) {
        } else {
          filteredDrinks.push(drink);
        }
      });
      res.send(drinks);
    })
    .catch((err) => {
      console.log('error');
      res.send(err);
    });
});

//=================== Get Individual drink by id ==================
app.get('/drink', (req, res) => {
  const drinkRequest = req.query.id;
  console.log(drinkRequest);
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkRequest}`)
    .then((results) => {
      const drinks = results.data.drinks[0];
      const drink = {};
      const ingredients = [];
      const measurements = [];

      for (var i = 1; i < 15; i++) {
        if (drinks[`strIngredient${i}`] !== null) {
          ingredients.push(drinks[`strIngredient${i}`]);
        }
        if (drinks[`strMeasure${i}`] !== null) {
          measurements.push(drinks[`strMeasure${i}`]);
        }
      }

      drink.ingredients = ingredients;
      drink.measurements = measurements;
      drink.instructions = drinks.strInstructions;
      drink.image = drinks.strDrinkThumb;
      drink.name = drinks.strDrink;

      console.log(drink);
      res.status(200);
      res.send(drink);
    })
    .catch((err) => {
      console.log('error');
      res.send(err);
    });
});

//=================== Get drink list with multi-ingredients==================
app.get('/mixer', (req, res) => {
  const drink = req.query.drink;
  const mixer = req.query.mixer;

  axios
    .get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${drink},${mixer}`)
    .then((results) => {
      const drinks = results.data.drinks;
      let filteredDrinks = [];
      drinks.map((drink) => {
        let name = drink.strDrink;

        if (
          name.includes('sex') ||
          name.includes('Asshole') ||
          name.includes('Zipperhead') ||
          name.includes('FUK')
        ) {
        } else {
          filteredDrinks.push(drink);
        }
      });
      console.log(drinks);
      res.status(200);
      res.send(drinks);
    })
    .catch((err) => {
      console.log('error');
      res.send(err);
    });
});

// ============== Get Random Drinks =============
app.get('/random', (req, res) => {
  console.log('made it');
  axios
    .get('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
    .then((result) => {
      const drinks = result.data.drinks;
      let filteredDrinks = [];
      drinks.map((drink) => {
        let name = drink.strDrink;

        if (
          name.includes('sex') ||
          name.includes('Asshole') ||
          name.includes('Zipperhead') ||
          name.includes('FUK')
        ) {
        } else {
          filteredDrinks.push(drink);
        }
      });
      res.status(200);
      console.log(filteredDrinks);
      res.send(filteredDrinks);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// ============ Get Popular drinks =============

app.get('/popular', (req, res) => {
  console.log('made it');
  axios
    .get('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
    .then((result) => {
      const drinks = result.data.drinks;
      let filteredDrinks = [];
      drinks.map((drink) => {
        let name = drink.strDrink;

        if (
          name.includes('sex') ||
          name.includes('Asshole') ||
          name.includes('Zipperhead') ||
          name.includes('FUK')
        ) {
        } else {
          filteredDrinks.push(drink);
        }
      });
      res.status(200);
      console.log(filteredDrinks);
      res.send(filteredDrinks);
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
