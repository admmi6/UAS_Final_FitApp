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
import { StackNavigator, TabNavigator } from "react-navigation";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { Container, Content, Item, Input, Icon } from 'native-base';

//import styles from './styles';
import Home from './Home';
import Daftar from './Daftar';
import DaftarFit from './DaftarFit';

var URL = "http://mhs.rey1024.com/1415051038/fitnessapp/login_fitusers.php";

const background = require('./Image/fit.jpg');
const logo = require('./Image/fitapp.png');

export default class Login extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  state = {
    email: '',
    password: '',
  }

   LoginPress() {
    if (this.state.email == '') {
      Alert.alert(
            'Error',
            'Email harus diisi!',
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
      fetch(URL + '?email='+this.state.email+'&password='+this.state.password)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert(
            'Error',
            'Email atau Password Salah!',
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
            <Image source={logo} style={{width: 300, height: 150, justifyContent: 'center', alignItems: 'center'}} />
          </Card>
          <Card>
            <FormLabel>Email</FormLabel>
            <FormInput 
               onChangeText={(u) => this.setState({email: u})}
                placeholder="Email..."
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

const LogNavigator = TabNavigator({
    Daftar: {
      screen: Daftar,
        navigationOptions: {
        title: 'Daftar Pengguna',
      },
    },
    DaftarFit: {
      screen: DaftarFit,
        navigationOptions: {
      title: 'Daftar Fitness Center',
      },
    }, 
});

const Navigator = StackNavigator({
  Login: {
    screen: Login
  },
  Home: { 
    screen: Home 
  },
  DaftarTab: { 
    screen: LogNavigator 
  },
},

{
  headerMode: 'none'
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 24,
    backgroundColor: 'white'
  },
  logoImg: {
    flex: 1,
    height: null,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 30
  },
  bottom: {
    backgroundColor: '#1976D2'
  }
})

AppRegistry.registerComponent('FitAppUts', () => Navigator);
