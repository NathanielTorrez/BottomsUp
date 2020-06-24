import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';

function PopularDrinks({ getPopularDrinks }) {
  return (
    <TouchableOpacity style={styles.opacity} onPress={getPopularDrinks}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Popular Drinks</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e98074',
    borderRadius: 25,
    height: 92,
    width: 92,
    alignItems: 'center',
  },
  buttonText: {
    color: '#eae7dc',
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
export default PopularDrinks;
