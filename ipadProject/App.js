import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from "./components/Navigator"

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Navigator />
    );
  }
}
