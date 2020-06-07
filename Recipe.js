import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import tailwind from 'tailwind-rn';

function Recipe(props) {
  return (
    <View style={tailwind('bg-gray-800 flex-auto flex-col mt-10 mb-20 ml-2 mr-2')}>
      <View style={tailwind('flex-row')}>
        <View style={tailwind('border border-yellow-500 mb-2')}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
        <View style={tailwind('mt-10 ml-8 flex-row flex-wrap')}>
          <Text style={tailwind('text-3xl flex-wrap')}>{props.name}</Text>
        </View>
      </View>
      <View style={tailwind('mb-3')}>
        <Text style={tailwind('text-xl mb-2')}>Instructions:</Text>
        <Text>{props.instructions}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Recipe;
