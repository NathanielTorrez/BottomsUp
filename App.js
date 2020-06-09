import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Picker,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Alcohol from './Alcohol.js';
import PopularDrinks from './PopularDrinks.js';
import RandomDrinks from './RandomDrinks.js';
import Ingredients from './Ingredients.js';
import ShowButton from './ShowButton.js';
import DrinkPage from './DrinkPage.js';
import NoResults from './NoResults.js';
import AddMixer from './AddMixer.js';
import Recipe from './Recipe.js';
import axios from 'axios';
import tailwind from 'tailwind-rn';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home',
      alcohol: 'tequila',
      drinks: [],
      id: '',
      recipe: {},
      addingMixer: false,
      mixer: 'triple_sec',
      noResults: false,
    };
    this.changeToDrinksPage = this.changeToDrinksPage.bind(this);
    this.changeToRecipePage = this.changeToRecipePage.bind(this);
    this.changeToHomePage = this.changeToHomePage.bind(this);
    this.getPopularDrinks = this.getPopularDrinks.bind(this);
    this.getRandomDrinks = this.getRandomDrinks.bind(this);
    this.selectAlcohol = this.selectAlcohol.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.backToDrinks = this.backToDrinks.bind(this);
    this.addingMixer = this.addingMixer.bind(this);
    this.selectMixer = this.selectMixer.bind(this);
  }

  // =========== Page Change handlers ===========

  backToDrinks = () => {
    this.setState({
      page: 'drinks',
    });
  };

  changeToDrinksPage = (e) => {
    let { addingMixer } = this.state;
    if (addingMixer) {
      axios
        .get('http://127.0.0.1:3000/mixer', {
          params: { drink: this.state.alcohol, mixer: this.state.mixer },
        })
        .then((res) => {
          const drinks = res.data;
          if (typeof drinks !== 'object') {
            this.setState({
              drinks: drinks,
              noResults: true,
            });
          } else {
            this.setState({
              drinks: drinks,
            });
          }
          this.backToDrinks();
        })
        .catch((err) => {
          this.setState({
            noResults: true,
          });
          console.log(err);
        });
    } else {
      axios
        .get('http://127.0.0.1:3000', { params: { drink: this.state.alcohol } })
        .then((res) => {
          const drinks = res.data;
          if (typeof drinks !== 'object') {
            this.setState({
              noResults: true,
            });
          } else {
            this.setState({
              drinks: drinks,
            });
            this.backToDrinks();
          }
        })
        .catch((err) => {
          this.setState({
            noResults: true,
          });
          console.log(err);
        });
    }
  };

  changeToHomePage = (e) => {
    this.setState({
      page: 'home',
      drinks: [],
      noResults: false,
      addingMixer: false,
    });
  };

  changeToRecipePage = (e) => {
    this.setState({
      page: 'recipe',
    });
  };

  // ========= Get random drinks from api ===========

  getRandomDrinks = () => {
    axios
      .get('http://127.0.0.1:3000/random')
      .then((res) => {
        const drinks = res.data;
        this.setState({
          drinks: drinks,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          noResults: true,
        });
      });
    // ===== change to drinks page ======
    this.backToDrinks();
  };

  // ========== Get Popular Drinks from api =========
  getPopularDrinks = () => {
    axios
      .get('http://127.0.0.1:3000/popular')
      .then((res) => {
        const drinks = res.data;
        this.setState({
          drinks: drinks,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          noResults: true,
        });
      });
    // ===== change to drinks page ======
    this.backToDrinks();
  };

  // ======== Picker Selection Handlers ===============
  selectAlcohol = (itemValue) => {
    this.setState({
      alcohol: itemValue,
    });
  };

  selectMixer = (itemValue) => {
    this.setState({
      mixer: itemValue,
    });
  };

  updateRecipe = (recipe) => {
    this.setState({
      recipe: recipe,
    });
  };

  // ======== Sauce only or Mixer Mode =============
  addingMixer = () => {
    const { addingMixer } = this.state;

    if (addingMixer) {
      this.setState({
        addingMixer: false,
      });
    } else {
      this.setState({
        addingMixer: true,
      });
    }
  };

  render() {
    let { page } = this.state;
    let { addingMixer } = this.state;
    let currentPage;

    if (this.state.noResults) {
      currentPage = (
        <View style={tailwind('bg-gray-200 flex-auto content-center text-center items-center')}>
          <NoResults changeToHomePage={this.changeToHomePage} />
        </View>
      );
    } else {
      if (page === 'home') {
        if (addingMixer) {
          currentPage = (
            <ScrollView style={tailwind('bg-orange-200 flex-auto')}>
              <View style={tailwind('bg-orange-200  flex-auto content-center items-center')}>
                <Text style={tailwind('mt-10 text-6xl text-orange-500 underline ')}>
                  Bottoms Up!
                </Text>
                <Alcohol alcohol={this.state.alcohol} selectAlcohol={this.selectAlcohol} />
                <Ingredients selectMixer={this.selectMixer} mixer={this.state.mixer} />
              </View>
              <View
                style={tailwind(
                  'bg-orange-200 flex-auto flex-row content-start items-start w-full '
                )}
              >
                <RandomDrinks getRandomDrinks={this.getRandomDrinks} />
                <PopularDrinks getPopularDrinks={this.getPopularDrinks} />
                <ShowButton changePage={this.changeToDrinksPage} />
              </View>
            </ScrollView>
          );
        } else {
          currentPage = (
            <ScrollView style={tailwind('bg-orange-200 flex-auto')}>
              <View style={tailwind('bg-orange-200  flex-auto content-center items-center')}>
                <Text style={tailwind('mt-10 text-6xl text-orange-500 underline')}>
                  Bottoms Up!
                </Text>
                <Alcohol alcohol={this.state.alcohol} selectAlcohol={this.selectAlcohol} />
              </View>
              <View
                style={tailwind(
                  'bg-orange-200 flex-auto flex-row content-start items-start w-full '
                )}
              >
                <AddMixer addingMixer={this.addingMixer} />
                <RandomDrinks getRandomDrinks={this.getRandomDrinks} />
                <PopularDrinks getPopularDrinks={this.getPopularDrinks} />
                <ShowButton changePage={this.changeToDrinksPage} />
              </View>
            </ScrollView>
          );
        }
      } else if (page === 'drinks') {
        currentPage = (
          <ScrollView style={tailwind('bg-orange-200 flex-auto')}>
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
          <View style={tailwind('bg-orange-500 flex-auto')}>
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
    }
    return currentPage;
  }
}
export default App;
