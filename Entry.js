import React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import tailwind from 'tailwind-rn';

function Entry({ name, image }) {
  return (
    <View
      style={tailwind(
        'flex-row mb-5 text-center content-center items-center border border-black bg-gray-800  '
      )}
    >
      <View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={tailwind('text-center content-center items-center flex-wrap w-3/4')}>
        <Text style={tailwind('text-2xl ml-2 text-center flex-row flex-wrap text-yellow-500')}>
          {name}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 98,
    height: 98,
    marginBottom: 3,
    marginTop: 3,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Entry;
