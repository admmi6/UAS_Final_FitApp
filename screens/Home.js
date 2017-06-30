import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";

import Login from "./Login"
import Index from "./Index";
import Lokasi from "./Lokasi";
import Tips from "./Tips";
import Profile from "./Profile";
import Detail from "./Detail";
//import {Detail} from "./Detail";
//import Daftar from "./Daftar";

export const HomeStack = StackNavigator({
  Fitness: {
    screen: Index,
    navigationOptions: {
      title: 'Fitness Center',
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detail',
    },
  },
  
});


const Home = TabNavigator({
  Index: { 
  	screen: HomeStack,
    navigationOptions: {
      title: 'Home',
    },
  },
  Lokasi: {
  	screen: Lokasi ,
    navigationOptions: {
      title: 'Lokasi',
    },
  },
  Tips: { 
  	screen: Tips 
  },
  Me: { 
  	screen: Profile 
  },
});

export default Home;