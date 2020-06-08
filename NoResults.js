import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import ShowButton from './ShowButton.js';

function NoResults({ changeToHomePage }) {
  return (
    <View>
      <Text style={tailwind('text-4xl text-center text-yellow-500 mb-20 mt-20')}>
        Maybe try something else..... no results
      </Text>
      <TouchableOpacity onPress={changeToHomePage} style={styles.opacity}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Back to search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4a5568',
    borderRadius: 25,
    width: 370,
  },
  buttonText: {
    color: '#ecc94b',
    textAlign: 'center',
    fontSize: 40,
  },
  opacity: {
    marginTop: 50,
    marginBottom: 50,
  },
});

export default NoResults;
