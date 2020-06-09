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
// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#4a5568',
//     borderRadius: 25,
//     width: 370,
//   },
//   buttonText: {
//     color: '#ecc94b',
//     textAlign: 'center',
//     fontSize: 40,
//   },
//   opacity: {
//     marginTop: 50,
//     marginBottom: 50,
//   },
// });

export default ShowButton;
