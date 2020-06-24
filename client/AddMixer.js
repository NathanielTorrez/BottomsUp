import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';

function AddMixer({ addingMixer }) {
  return (
    <View>
      <TouchableOpacity onPress={addingMixer} style={styles.opacity}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Mixer!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e98074',
    borderRadius: 25,
    height: 92,
    width: 92,
  },
  buttonText: {
    color: '#eae7dc',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 30,
  },
  opacity: {
    marginTop: 150,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 0,
    height: 95,
    width: 95,
  },
});

export default AddMixer;
