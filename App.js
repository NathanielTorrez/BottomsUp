import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker, ScrollView } from 'react-native';
import Alcohol from './Alcohol.js';
import Ingredients from './Ingredients.js';
import ShowButton from './ShowButton.js';
import DrinkPage from './DrinkPage.js';
import Recipe from './Recipe.js';
import axios from 'axios';
import tailwind from 'tailwind-rn';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home',
      alcohol: 'whiskey',
      drinks: [],
      id: '',
      recipe: {},
      addingMixer: true,
      mixer: '7-up',
    };
    this.changeToDrinksPage = this.changeToDrinksPage.bind(this);
    this.changeToHomePage = this.changeToHomePage.bind(this);
    this.changeToRecipePage = this.changeToRecipePage.bind(this);
    this.selectAlcohol = this.selectAlcohol.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.backToDrinks = this.backToDrinks.bind(this);
  }

  backToDrinks = () => {
    this.setState({
      page: 'drinks',
    });
  };

  changeToDrinksPage = (e) => {
    axios.get('http://127.0.0.1:3000', { params: { drink: this.state.alcohol } }).then((res) => {
      const drinks = res.data;
      this.setState({
        drinks: drinks,
      });
    });
    this.backToDrinks();
  };

  changeToHomePage = (e) => {
    this.setState({
      page: 'home',
      drinks: [],
    });
  };

  changeToRecipePage = (e) => {
    this.setState({
      page: 'recipe',
    });
  };

  selectAlcohol = (itemValue) => {
    this.setState({
      alcohol: itemValue,
    });
  };

  updateRecipe = (recipe) => {
    this.setState({
      recipe: recipe,
    });
  };

  render() {
    let { page } = this.state;
    let { addingMixer } = this.state;
    let currentPage;
    if (page === 'home') {
      if (addingMixer) {
        currentPage = (
          <ScrollView>
            <View style={tailwind('bg-gray-800  flex-auto content-center items-center')}>
              <Text style={tailwind('mt-10 text-6xl text-yellow-500 ')}>Bottoms Up!</Text>
              <Alcohol alcohol={this.state.alcohol} selectAlcohol={this.selectAlcohol} />
              <Ingredients ingredient={this.state.mixer} />
              <ShowButton changePage={this.changeToDrinksPage} />
            </View>
          </ScrollView>
        );
      } else {
        currentPage = (
          <ScrollView>
            <View style={tailwind('bg-gray-800  flex-auto content-center items-center')}>
              <Text style={tailwind('mt-10 text-6xl text-yellow-500 ')}>Bottoms Up!</Text>
              <Alcohol alcohol={this.state.alcohol} selectAlcohol={this.selectAlcohol} />
              <ShowButton changePage={this.changeToDrinksPage} />
            </View>
          </ScrollView>
        );
      }
    } else if (page === 'drinks') {
      currentPage = (
        <ScrollView style={tailwind('bg-gray-900 flex-auto')}>
          <DrinkPage
            alcohol={this.state.alcohol}
            drinks={this.state.drinks}
            changeToHomePage={this.changeToHomePage}
            changeToRecipePage={this.changeToRecipePage}
            updateRecipe={this.updateRecipe}
          />
        </ScrollView>
      );
    } else if (page === 'recipe') {
      currentPage = (
        <View style={tailwind('bg-gray-900 flex-auto')}>
          <Recipe
            backToDrinks={this.backToDrinks}
            instructions={this.state.recipe.instructions}
            measurements={this.state.recipe.measurements}
            ingredients={this.state.recipe.ingredients}
            image={this.state.recipe.image}
            name={this.state.recipe.name}
          />
        </View>
      );
    }
    return currentPage;
  }
}
export default App;
