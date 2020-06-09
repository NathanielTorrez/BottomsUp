const axios = require('axios');
const fs = require('graceful-fs');
const faker = require('faker');

const getNames = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let names = [];

  for (let i = 0; i < alphabet.length + 9; i++) {
    let currentChar;
    if (i > alphabet.length) {
      currentChar = i - alphabet.length;
    } else {
      currentChar = alphabet[i];
    }
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${currentChar}`)
      .then((results) => {
        const drinks = results.data.drinks;
        if (drinks !== null) {
          drinks.map((drink) => {
            names.push(drink.strDrink);
          });
          if (names.length > 350) {
            console.log(names);
            names = names.sort();
            names.map((name) => {
              if (name.includes('sex') || name.includes('Asshole') || name.includes('Zipperhead')) {
              } else {
                let rating = faker.random.number({
                  min: 1,
                  max: 5,
                });
                const formattedName = `${name},${rating}\n`;
                fs.appendFile('drinks.txt', formattedName, 'utf8', (err) => {
                  if (err) {
                    console.log(err);
                  }
                });
              }
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
