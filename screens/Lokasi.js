import React, { Component } from 'react';
import { ScrollView, Text, Linking, View, WebView } from "react-native";
import { Card, Button } from "react-native-elements";

export default class Lokasi extends Component {
  static navigationOptions = {
    title: 'Tips',
  };
  render() {
    return (
      <WebView
        source={{uri: 'https://www.google.co.id/maps/@-8.6633203,115.2422684,15z'}}
      />
    );
  }
}