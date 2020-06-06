import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';

import tailwind from 'tailwind-rn';

export default function App() {
  const page = useState('home');
  const alcohol = useState('');
  const juice = useState('');

  return (
    <View style={tailwind('bg-gray-800')}>
      <Text style={tailwind('mt-6 text-center text-3xl text-yellow-500')}>Bottoms Up!</Text>
      <Text style={tailwind('mt-6 text-center text-xl text-yellow-500')}>Pick your sauce</Text>
      <Picker>
        <Picker.item label="Whiskey" value="Whiskey" />
        <Picker.item label="Rum" value="Rum" />
        <Picker.item label="Vodka" value="Vodka" />
        <Picker.item label="Tequilla" value="Tequilla" />
        <Picker.item label="Gin" value="Gin" />
      </Picker>
      <Text style={tailwind('mt-6 text-center text-xl text-yellow-500')}>Pick your juice</Text>
      <Picker>
        <Picker.item label="Pineapple" value="Pineapple" />
        <Picker.item label="Orange" value="Orange" />
        <Picker.item label="Triple Sec" value="Triple Sec" />
        <Picker.item label="Bitters" value="Bitters" />
        <Picker.item label="Simple Syrup" value="Simple Syrup" />
      </Picker>
      <Button
        color="#ecc94b"
        title="show me the drinks"
        onPress={() => {
          setPage('results');
        }}
      />
    </View>
  );
}
