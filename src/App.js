'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Content from './components/Content'

class App extends Component {
  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    return (
      <Navigator
        style={{padding: 100}}
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <TouchableHighlight onPress={() => {
            if (route.index === 0) navigator.push(routes[1]);
            else navigator.pop();
          }}>
          <Text>Hello {route.title}!</Text>
          </TouchableHighlight>
        }
      />
    )
  }
}

module.exports = App;
