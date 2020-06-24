import React from 'react';
import { Text, View, Picker } from 'react-native';
import tailwind from 'tailwind-rn';
console.error = (error) => error.apply;

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

  return (
    <View>
      <Text style={tailwind('mt-10 text-4xl text-orange-500')}>Pick your sauce:</Text>
      <Picker selectedValue={alcohol} onValueChange={selectAlcohol}>
        {liquorList.map((liqour) => (
          <Picker.item label={liqour.split('_').join(' ')} value={liqour} />
        ))}
      </Picker>
    </View>
  );
}
export default Alcohol;
