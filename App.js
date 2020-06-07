import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker, ScrollView } from 'react-native';
import Alcohol from './Alcohol.js';
import Ingredients from './Ingredients.js';
import ShowButton from './ShowButton.js';
import DrinkPage from './DrinkPage.js';
import axios from 'axios';

import tailwind from 'tailwind-rn';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home',
      alcohol: '',
      drinks: [],
    };
    this.changePage = this.changePage.bind(this);
    this.selectAlcohol = this.selectAlcohol.bind(this);
  }

  changePage = (e) => {
    e.preventDefault();

    axios.get('http://127.0.0.1:3000', { params: { drink: this.state.alcohol } }).then((res) => {
      const drinks = res.data;
      console.log(drinks[0].idDrink);
      this.setState({
        drinks: drinks,
      });
    });
    const { page } = this.state;
    if (page === 'results') {
      this.setState({
        page: 'home',
      });
    } else {
      this.setState({
        page: 'results',
      });
    }
  };

  selectAlcohol = (itemValue) => {
    this.setState({
      alcohol: itemValue,
    });
  };

  render() {
    let currentPage;
    if (this.state.page === 'home') {
      currentPage = (
        <View style={tailwind('bg-gray-800  flex-auto content-center items-center')}>
          <Text style={tailwind('mt-10 text-6xl text-yellow-500 ')}>Bottoms Up!</Text>
          <Alcohol alcohol={this.state.alcohol} selectAlcohol={this.selectAlcohol} />
          <ShowButton changePage={this.changePage} />
        </View>
      );
    }
    if (this.state.page === 'results') {
      currentPage = (
        <ScrollView style={tailwind('bg-gray-900 flex-auto')}>
          <DrinkPage
            alcohol={this.state.alcohol}
            drinks={this.state.drinks}
            changePage={this.changePage}
          />
        </ScrollView>
      );
    }
    return currentPage;
  }
}
export default App;
