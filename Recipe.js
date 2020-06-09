import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';

function Recipe(props) {
  return (
    <ScrollView>
      <TouchableOpacity onPress={props.backToDrinks} style={styles.opacity}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Back To Drinks</Text>
        </View>
      </TouchableOpacity>
      <View style={tailwind('bg-orange-500 flex-auto flex-col mt-5 mb-20 ml-2 mr-2')}>
        <View style={tailwind('flex-row')}>
          <View>
            <View style={tailwind('border border-yellow-500 mb-2')}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
          </View>
          <View
            style={tailwind('mt-10 ml-8 text-center content-center items-center flex-wrap w-1/2')}
          >
            <Text style={tailwind('text-3xl flex-wrap text-gray-400 ')}>{props.name}</Text>
          </View>
        </View>
        <View style={tailwind('mb-3')}>
          <Text style={tailwind('text-2xl mb-2 text-gray-200 underline')}>Instructions:</Text>
          <Text style={tailwind('text-lg text-white')}>{props.instructions}</Text>
        </View>
        <View style={tailwind('mt-10 flex-row flex-wrap justify-between')}>
          <View>
            {props.measurements.map((measurement) => (
              <Text style={tailwind('text-lg mb-5 text-white')}>{measurement}</Text>
            ))}
          </View>
          <View>
            {props.ingredients.map((ingredient) => (
              <Text style={tailwind('text-lg mb-5 text-white')}>{ingredient}</Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
  },
  logo: {
    width: 66,
    height: 58,
  },
  button: {
    backgroundColor: '#ecc94b',
    borderRadius: 25,
    width: 200,
  },
  buttonText: {
    color: '#1a202c',
    textAlign: 'center',
    fontSize: 20,
  },
  opacity: {
    marginTop: 40,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
  },
});

export default Recipe;
