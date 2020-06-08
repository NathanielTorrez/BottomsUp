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
      .get('http://127.0.0.1:3000/drink', { params: { id: this.state.idNum } })
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
          style={tailwind(
            'flex-row mb-5 text-center content-center items-center border border-black bg-gray-800'
          )}
        >
          <View>
            <Image style={styles.image} source={{ uri: this.props.image }} />
          </View>
          <View style={tailwind('text-center content-center items-center flex-wrap w-3/4')}>
            <Text style={tailwind('text-2xl ml-2 text-center flex-row flex-wrap text-yellow-500')}>
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
