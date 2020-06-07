import React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import tailwind from 'tailwind-rn';

function Entry({ name, image }) {
  return (
    <View style={tailwind('flex-row mb-5')}>
      <View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text style={tailwind('text-lg ml-2')}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 98,
    height: 98,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Entry;
