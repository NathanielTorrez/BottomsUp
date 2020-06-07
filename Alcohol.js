import React from 'react';
import { Text, View, Picker } from 'react-native';

import tailwind from 'tailwind-rn';

function Alcohol({ selectAlcohol, alcohol }) {
  return (
    <View>
      <Text style={tailwind('mt-20 text-4xl text-yellow-500')}>Pick your sauce</Text>
      <Picker selectedValue={alcohol} onValueChange={selectAlcohol}>
        <Picker.item label="Whiskey" value="Whiskey" />
        <Picker.item label="Rum" value="Rum" />
        <Picker.item label="Vodka" value="Vodka" />
        <Picker.item label="Tequilla" value="Tequilla" />
        <Picker.item label="Gin" value="Gin" />
      </Picker>
    </View>
  );
}
export default Alcohol;
