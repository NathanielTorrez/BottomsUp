import React from 'react';
import { Text, View, Picker } from 'react-native';
import tailwind from 'tailwind-rn';

function Ingredients({ selectMixer, mixer }) {
  let ingredientList = [
    'Triple_sec',
    'Orange_bitters',
    'Tea',
    'Bitters',
    'Sugar',
    'demerara_Sugar',
    'Carbonated_water',
    'Grenadine',
    'Grapefruit_juice',
    'Apple_juice',
    'Pineapple_juice',
    'Lemon_juice',
    'Sugar_syrup',
    'Milk',
    'Strawberries',
    'Chocolate_syrup',
    'Yoghurt',
    'Mango',
    'Ginger',
    'Lime',
    'Cantaloupe',
    'Berries',
    'Grapes',
    'Kiwi',
    'Tomato_juice',
    'Cocoa_powder',
    'Chocolate',
    'Heavy_cream',
    'Coffee',
    'Orange',
    'Cranberries',
    'Apple_cider',
    'Cranberry_juice',
    'Lemon',
    'Lemonade',
    'Sprite',
    '7-Up',
  ];
  // alphabetically sort
  ingredientList = ingredientList.sort();
  return (
    <View>
      <Text style={tailwind('mt-6 text-center text-4xl text-orange-500')}>Pick your mixer:</Text>
      <Picker selectedValue={mixer} onValueChange={selectMixer}>
        {ingredientList.map((ingredient) => (
          <Picker.item label={ingredient.split('_').join(' ')} value={ingredient} />
        ))}
      </Picker>
    </View>
  );
}
export default Ingredients;
