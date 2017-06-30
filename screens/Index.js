import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
//import { Card, ListItem, List } from "react-native-elements";
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Content, Card, CardItem, Body, Left, Thumbnail, List, ListItem } from 'native-base';

import {daftar} from "./ListData";
import Detail from "./Detail";
import Home from "./Home";

const gym = require('./Image/barbel.png');
var URL="http://mhs.rey1024.com/1415051038/fitnessapp/get_fitcenter.php";

export default class Index extends Component {
  constructor(props, context) {
    super(props, context);
 	    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
       dataSource: ds,
    };
  }

  AmbilDataFit() {
    fetch(URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows
        (responseData),
      });
    }) .done();
  }

    renderRow(record) {
    return (
      <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('./Image/barbel.png')} />
              <Body>
                  <Text style={styles.items}>{record.nama}</Text>
                  <Text style={styles.alamat}>{record.alamat}</Text>
              </Body>
            </Left>
          </CardItem>
       </Card>
    );
  }

  render() {
    this.AmbilDataFit();
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.mainContainer}>
       <TouchableHighlight onPress={() => navigate('Detail')}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
       </TouchableHighlight>
      </ScrollView>
    );
  }

}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    backgroundColor: '#0f1b29',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#feaf12',
    borderRadius: 25,
    borderWidth: 0,
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    
    height: 60,
    width: 60,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  items: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  pesan: {
    color: '#ccc',
    fontSize: 14,
  },
  total: {
    width: 80,
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold',
  },
   bottomContainer: {
    backgroundColor: '#2988b9',
    paddingVertical: 15
  },
  bottomText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
