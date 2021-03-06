import React from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import axios from 'axios';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idNum: this.props.idNum,
    };
    this.changeDisplayDrink = this.changeDisplayDrink.bind(this);
  }

  changeDisplayDrink = (e) => {
    axios
      .get('http://50.18.218.159:3000/drink', { params: { id: this.state.idNum } })
      .then((res) => {
        const recipe = res.data;
        this.props.updateRecipe(recipe);
        this.props.changeToRecipePage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.changeDisplayDrink}>
        <View
          style={tailwind('flex-row mb-3 text-center content-center items-center bg-orange-500')}
        >
          <View>
            <Image style={styles.image} source={{ uri: this.props.image }} />
          </View>
          <View style={tailwind('text-center content-center items-center flex-wrap w-3/4')}>
            <Text style={tailwind('text-2xl ml-2 text-center flex-row flex-wrap text-gray-200')}>
              {this.props.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginBottom: 3,
    marginTop: 3,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Entry;
