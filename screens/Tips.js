import React, { Component } from 'react';
import { ScrollView, Text, Linking, View, WebView } from "react-native";
import { Card, Button } from "react-native-elements";

const images = [
  {
    key: 1,
    name: "Nathan Anderson",
    image: require("../images/1.jpg"),
    url: "https://unsplash.com/photos/C9t94JC4_L8"
  },
  {
    key: 2,
    name: "Jamison McAndie",
    image: require("../images/2.jpg"),
    url: "https://unsplash.com/photos/waZEHLRP98s"
  },
  {
    key: 3,
    name: "Alberto Restifo",
    image: require("../images/3.jpg"),
    url: "https://unsplash.com/photos/cFplR9ZGnAk"
  },
  {
    key: 4,
    name: "John Towner",
    image: require("../images/4.jpg"),
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  }
];

export default class About extends Component {
  static navigationOptions = {
    title: 'Tips',
  };
  render() {
    return (
      // <View style={{ flex: 1 }}>
      //   <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      //     {images.map(({ name, image, url, key }) => (
      //       <Card title={`CARD ${key}`} image={image} key={key}>
      //         <Text style={{ marginBottom: 10 }}>
      //           Photo by {name}.
      //         </Text>
      //         <WebView
      //           backgroundColor="#03A9F4"
      //           title="VIEW NOW"
      //           onPress={() => Linking.openURL(url)}
      //         />
      //       </Card>
      //     ))}
      //   </ScrollView>
      // </View>
      <WebView
      source={{uri: 'http://www.carasixpack.net/2015/11/panduan-fitness-mudah-untuk-pemula.html'}}
      />
    );
  }
}