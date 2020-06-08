import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import Entry from './Entry.js';

function DrinkPage({ drinks, changeToHomePage, changeToRecipePage, updateRecipe, backTodrinks }) {
  return (
    <View>
      <TouchableOpacity style={styles.opacity} onPress={changeToHomePage}>
        <View styles={styles.button}>
          <Text style={styles.buttonText}>Try Something Else</Text>
        </View>
      </TouchableOpacity>
      {drinks.map((drink) => (
        <Entry
          image={drink.strDrinkThumb}
          name={drink.strDrink}
          changeToRecipePage={changeToRecipePage}
          idNum={drink.idDrink}
          updateRecipe={updateRecipe}
          backTodrinks={backTodrinks}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ecc94b',
    borderRadius: 25,
    width: 300,
  },
  buttonText: {
    color: '#1a202c',
    textAlign: 'center',
    fontSize: 30,
  },
  opacity: {
    marginTop: 50,
    marginBottom: 30,
    backgroundColor: '#ecc94b',
    borderRadius: 25,
  },
});

export default DrinkPage;
