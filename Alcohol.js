import React from 'react';
import { Text, View, Picker } from 'react-native';

import tailwind from 'tailwind-rn';

function Alcohol({ selectAlcohol, alcohol }) {
  // alphabetically sort
  let liquorList = [
    'Light_rum',
    'Dark_rum',
    'Scotch',
    'Southern_Comfort',
    'Brandy',
    'Lemon_vodka',
    'Blended_whiskey',
    'Bourbon',
    'Tequila',
    'Vodka',
    'Añejo_rum',
    'Kahlua',
    'Irish_whiskey',
    'Apple_brandy',
    'Cherry_brandy',
    'Red_wine',
    'Rum',
    'Cognac',
    'Peach_Vodka',
    'Spiced_rum',
    'Johnnie_Walker',
    'Everclear',
    'Whiskey',
    'Absolut_Citron',
    'Irish_cream',
    'Chocolate_liqueur',
    'Midori_melon_liqueur',
    'Cider',
    'Blackberry_brandy',
    'Peppermint_schnapps',
    'Jack_Daniels',
    'Creme_de_Cassis',
    'Dry Vermouth',
    'Amaretto',
  ];
  liquorList = liquorList.sort();
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
      <Text style={tailwind('mt-10 text-4xl text-yellow-500')}>Pick your sauce</Text>
      <Picker selectedValue={alcohol} onValueChange={selectAlcohol}>
        {liquorList.map((liqour) => (
          <Picker.item label={liqour.split('_').join(' ')} value={liqour} />
        ))}
      </Picker>
    </View>
  );
}
export default Alcohol;
