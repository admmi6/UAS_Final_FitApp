import React, {Component} from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { StackNavigator, TabNavigator } from "react-navigation";

import Login from "./Login";
export default class Profile extends Component {
  render(){
return(
  <View style={{ paddingVertical: 20 }}>
    <Card title="Setting">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>KS</Text>
      </View>
            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="transparent"
              textStyle={{ color: "#03A9F4" }}
              title="Log Out"
              onPress={() => this.props.navigation.navigate("Login")}
            />
        </Card>
      </View>
    );
  }
}
