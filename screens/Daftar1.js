/*
import React from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
export default ({ navigation }) => (
  <ScrollView style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Username</FormLabel>
      <FormInput placeholder="Username..." />

      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />

      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

      <FormLabel>Address</FormLabel>
      <FormInput secureTextEntry placeholder="Address..." />

      <FormLabel>Phone Number</FormLabel>
      <FormInput secureTextEntry placeholder="Phone Number..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN UP"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("Login"));
        }}
      />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="Sudah punya account ? Sign In"
        onPress={() => navigation.navigate("Login")}
      />
    </Card>
  </ScrollView>
);
*/

import React, {Component} from 'react';
import {AppRegistry,
        StyleSheet,
        View,
        ScrollView,
        Image,
        Text,
        TextInput,
        TouchableOpacity,
        Alert,
        KeyboardAvoidingView,
} from 'react-native';
import { StackNavigator } from "react-navigation";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { Container, Content, Item, Input, Icon } from 'native-base';

//import styles from './styles';
import Home from './Home';
import Daftar from './Daftar';

var URL = "http://mhs.rey1024.com/1415051038/fitnessapp/login.php";

const background = require('./Image/fit.jpg');
const logo = require('./Image/fitapp.png');

export default class Login extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  state = {
    username: '',
    password: '',
  }

   LoginPress() {
    if (this.state.username == '') {
      Alert.alert(
            'Error',
            'Username harus diisi!',
      );
      return;
    }

    if (this.state.password == '') {
      Alert.alert(
            'Error',
            'Password harus diisi!',
      );
      return;
    } else {
      fetch(URL + '?username='+this.state.username+'&password='+this.state.password)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert(
            'Error',
            'Username atau Password Salah!',
          );
        }
        else {
           Alert.alert(
            'Success',
            'Login Success',
          );
          const { navigate } = this.props.navigation;
          navigate('Home');
        }
      })
      .done();
      }
    }

  render () {
    return (
       <ScrollView style={{ paddingVertical: 20 }}>
          <Card>
            <Text style={{textAlign: 'center', fontSize: 20}}>Sign In Please..</Text>
            <Image source={logo} style={{width: 300, height: 100, justifyContent: 'center', alignItems: 'center'}} />
          </Card>

          <Card>
            <FormLabel>Username</FormLabel>
            <FormInput 
               onChangeText={(u) => this.setState({username: u})}
                placeholder="Username..."
            />


            <FormLabel>Password</FormLabel>
            <FormInput
              onChangeText={(p) => this.setState({password: p})}
                secureTextEntry 
                placeholder="Password..." />

            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="SIGN IN"
              onPress={this.LoginPress.bind(this)}
            />
            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="transparent"
              textStyle={{ color: "#bcbec1" }}
              title="Belum punya account ? Sign Up"
              onPress={() => this.props.navigation.navigate("Daftar")}
            />
          </Card>
      </ScrollView>
    );
  }

 
}



const Navigator = StackNavigator({
  Login: {
    screen: Login
  },
  Home: { 
    screen: Home 
  },
  Daftar: { 
    screen: Daftar 
  },
}, {
  headerMode: 'none'
});



AppRegistry.registerComponent('FitAppUts', () => Navigator);
