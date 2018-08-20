import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../container/Home';
import PhotoScreen from '../container/Photo';

const Application = createStackNavigator({
  Home: { screen: HomeScreen },
  Photo: { screen: PhotoScreen },
});

export default class App extends Component {
  render() {
    return (
      <Application />
    );
  }
}

