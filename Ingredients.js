import React from 'react';
import { Text, View, Picker } from 'react-native';
import tailwind from 'tailwind-rn';

function Ingredients() {
  return (
    <View>
      <Text style={tailwind('mt-6 text-center text-xl text-yellow-500')}>Pick your juice</Text>
      <Picker>
        <Picker.item label="Pineapple" value="Pineapple" />
        <Picker.item label="Orange" value="Orange" />
        <Picker.item label="Triple Sec" value="Triple Sec" />
        <Picker.item label="Bitters" value="Bitters" />
        <Picker.item label="Simple Syrup" value="Simple Syrup" />
      </Picker>
    </View>
  );
}
export default Ingredients;
