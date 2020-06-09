import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';

function AddMixer({ addingMixer }) {
  return (
    <View>
      <TouchableOpacity onPress={addingMixer} style={styles.opacity}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Tap to add mixer?</Text>
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
    marginLeft: 0,
    marginRight: 0,
    height: 95,
    width: 95,
  },
});

export default AddMixer;
