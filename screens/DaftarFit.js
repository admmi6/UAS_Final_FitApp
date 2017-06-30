import React, { Component, PureComponent, Proptypes } from "react";
import { View, ScrollView, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

import Login from './Login';

const endpoint = 'http://mhs.rey1024.com/1415051038/fitnessapp/add_fitcenter.php';

export default class DaftarFit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      alamat: "",
      contac: "",
      email: "",
      password: "",
    };
  }

  
  onSimpan() {
    fetch(endpoint + '?nama=' + this.state.nama + '&alamat=' + this.state.alamat + '&contac=' + this.state.contac + '&email=' + this.state.email + '&password=' + this.state.password)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert(
            "Erorr",
            "Pendaftaran Gagal",
            );
         }
         else
       {
          Alert.alert(
            "Success",
            "Pemdaftaran Fitness Center Berhasil",
            );
          const { navigate } = this.props.navigation;
          navigate('Login');
        }

      })
      .done();
  }


  render () {
    const { nama, alamat, contac, email, password } = this.state;
    return (
      <ScrollView style={{ paddingVertical: 20 }}>
          <Card>

            <FormLabel>Nama Fiteness Center</FormLabel>
            <FormInput placeholder="Nama..."
              onChangeText={(e) => this.setState({ nama: e })}
              text = {this.state.nama}
            />
            <FormLabel>Alamat</FormLabel>
            <FormInput placeholder="Alamat..." 
              onChangeText={(e) => this.setState({ alamat: e })}
             text = {this.state.alamat}
            />
            <FormLabel>Contac</FormLabel>
            <FormInput placeholder="Contac.."
              onChangeText={(e) => this.setState({ contac: e })}
              text = {this.state.contac}
            />
             <FormLabel>Email</FormLabel>
            <FormInput placeholder="Email address..." 
              onChangeText={(e) => this.setState({ email: e })}
              text = {this.state.email}
            />
            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry placeholder="Password..." 
              onChangeText={(e) => this.setState({ password: e })}
              text = {this.state.password}
            />

            

            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="Daftar"
              //onPress={() => {this.onSave().then(() => navigation.navigate("Login"));
              onPress={() => this.onSimpan()}
              
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