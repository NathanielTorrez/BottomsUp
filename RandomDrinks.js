import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';

function RandomDrinks({ getRandomDrinks }) {
  return (
    <View>
      <TouchableOpacity style={styles.opacity} onPress={getRandomDrinks}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Random Drinks</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4a5568',
    borderRadius: 25,
    height: 92,
    width: 92,
  },
  buttonText: {
    color: '#ecc94b',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 23,
  },
  opacity: {
    marginTop: 150,
    marginBottom: 10,
    height: 95,
    width: 95,
  },
});
export default RandomDrinks;
