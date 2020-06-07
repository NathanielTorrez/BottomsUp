import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import Entry from './Entry.js';

function DrinkPage({ drinks, changePage }) {
  return (
    <View>
      <Button title="go back" onPress={changePage} />
      {drinks.map((drink) => (
        <Entry image={drink.strDrinkThumb} name={drink.strDrink} />
      ))}
    </View>
  );
}

export default DrinkPage;
