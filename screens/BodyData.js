import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import { Content, Card, CardItem, Body, Left, Thumbnail, List, ListItem } from 'native-base';
import HTMLView from 'react-native-htmlview';

export default class BodyData extends Component {

render(){
	let articles = this.props.data.map(function(articleData, index){
	return (
		  <Card>
		      <CardItem>
		        <Left>
		          <Thumbnail source={require('./Image/barbel.png')} />
		          <Body>
		            <Text>{articleData.title.$t}</Text>
		          </Body>
		        </Left>
		      </CardItem>
		   </Card>
		  )
		});

		return(
			<Content>
				{articles}
			</Content>
		);

	}
}