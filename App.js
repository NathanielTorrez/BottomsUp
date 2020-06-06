import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';
//import Slider from '@react-native-community/slider';

import tailwind from 'tailwind-rn';

export default function App() {
  return (
    <View style={tailwind('bg-gray-700')}>
      <Text style={tailwind('mt-6 text-center text-3xl text-yellow-500')}>Bottoms Up!</Text>
      <Text style={tailwind('mt-6 text-center text-xl text-yellow-500')}>Pick your sauce</Text>
      <Picker>
        <Picker.item label="Whiskey" />
        <Picker.item label="Rum" />
        <Picker.item label="Vodka" />
        <Picker.item label="Tequilla" />
        <Picker.item label="Gin" />
      </Picker>
      <Text style={tailwind('mt-6 text-center text-xl text-yellow-500')}>Pick your juice</Text>
      <Picker>
        <Picker.item label="Pineapple" />
        <Picker.item label="Orange" />
        <Picker.item label="Triple Sec" />
        <Picker.item label="Bitters" />
        <Picker.item label="Simple Syrup" />
      </Picker>
      <Button color="#ecc94b" title="show me the drinks" />
    </View>
  );
}
