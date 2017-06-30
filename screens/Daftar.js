import React, { Component, PureComponent, Proptypes } from "react";
import { View, ScrollView, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

import Login from './Login';


const endpoint = 'http://mhs.rey1024.com/1415051038/fitnessapp/add_fitusers.php';

export default class Daftar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      address: "",
      phone_no: "",
    };
  }

  
  onSave() {
    fetch(endpoint + '?email=' + this.state.email + '&username=' + this.state.username + '&password=' + this.state.password + '&address=' + this.state.address + '&phone_no=' + this.state.phone_no)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert(
            "Erorr",
            "Gagal Daftar",
            );
         }
         else
       {
          Alert.alert(
            "Success",
            "Berhasil Daftar",
            );
          const { navigate } = this.props.navigation;
          navigate('Login');
        }

      })
      .done();
  }


  render () {
    const { email, username, password, address, phone_no } = this.state;
    return (
      <ScrollView style={{ paddingVertical: 20 }}>
          <Card>
             <FormLabel>Email</FormLabel>
            <FormInput placeholder="Email address..." 
              onChangeText={(e) => this.setState({ email: e })}
              text = {this.state.email}
            />

            <FormLabel>Username</FormLabel>
            <FormInput placeholder="Username..."
              onChangeText={(e) => this.setState({ username: e })}
              text = {this.state.username}
            />

            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry placeholder="Password..." 
              onChangeText={(e) => this.setState({ password: e })}
              text = {this.state.password}
            />

            <FormLabel>Address</FormLabel>
            <FormInput placeholder="Address..." 
              onChangeText={(e) => this.setState({ address: e })}
             text = {this.state.address}
            />

            <FormLabel>Phone Number</FormLabel>
            <FormInput placeholder="Phone Number..."
              onChangeText={(e) => this.setState({ phone_no: e })}
              text = {this.state.phone_no}
            />

            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="SIGN UP"
              //onPress={() => {this.onSave().then(() => navigation.navigate("Login"));
              onPress={() => this.onSave()}
              
            />

            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="transparent"
              textStyle={{ color: "#bcbec1" }}
              title="Sudah punya account ? Sign In"
              onPress={() => this.props.navigation.navigate("Login")}
            />
          </Card>
      </ScrollView>

    );
  }

}