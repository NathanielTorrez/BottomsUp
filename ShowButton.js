import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';

function ShowButton({ changePage }) {
  return (
    <TouchableOpacity onPress={changePage} style={styles.opacity}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Show Me The Drinks</Text>
      </View>
    </TouchableOpacity>
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

export default ShowButton;
