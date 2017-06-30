/*import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

class ListViewDemo extends Component {

  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: this._genRow(),
      dataSource: ds,
    }
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.data)
    });
  }

  _genRow(){
    var datas = [];
    for (var i = 0; i < 5; i++) {
      datas.push({
        row: i,
        isSelect: false,
      });
    }
    console.log('datas ' + JSON.stringify(datas));
    return datas;
  }

  render() {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this._renderRow.bind(this)}
        renderHeader = {() => <View style={{height: 10, backgroundColor:     '#f5f5f5'}} />}
        onEndReached = {() => console.log('')}
        renderSeparator = {(sectionID, rowID) =>
          <View
            style={styles.style_separator}
            key={`${sectionID} - ${rowID}`}
          />}
      />
    );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
    console.log('render row ...');
    return (
      <TouchableHighlight onPress={this._onPressRow.bind(this.rowID, rowData)}>
        <View style={styles.style_row_view}>
          <Text style={styles.style_text}>{rowData.row}</Text>
          <Text style={styles.style_text}>{rowData.isSelect ? 'true' : 'false'}                   </Text>
            </View>
          </TouchableHighlight>
        );
      }

  _onPressRow(rowID, rowData) {

    rowData.isSelect = !rowData.isSelect;
    var dataClone = this.state.data;
    dataClone[rowID] = rowData;
    this.setState({
      data: dataClone
    });
    console.log(this.state.data);
  }
}

const styles = StyleSheet.create({
  style_row_view: {
    flex: 1,
    flexDirection: 'row',
    height: 57,
    backgroundColor: '#FFFFFF',
  },
  style_text: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#333333',
    alignSelf: 'center',
  },

});

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);

import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class Detail extends Component {
  render() {
    const { nama, alamat, contac, email } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <List>
          <ListItem
            title="nama"
            rightTitle={nama}
            hideChevron
          />
          <ListItem
            title="alamat"
            rightTitle={alamat}
            hideChevron
          />
        </List>
        <ListItem
          title="contac"
          rightTitle={contac}
          hideChevron
        />
      </ScrollView>
    );
  }
}

export default Detail;*/

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
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Content, Card, CardItem, Body, Left, Thumbnail, List, ListItem } from 'native-base';

var URL="http://mhs.rey1024.com/1415051038/fitnessapp/get_fitcenter.php";

export default class Detail extends Component {
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
    fetch(URL+ '?email=1')
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
                 <Body>
                    <Text style={styles.price}>{record.nama}</Text>
                    <Text style={styles.info}>{record.alamat}</Text>
                    <Text style={styles.items}>{record.contac}</Text>
               </Body>
            </Left>
          </CardItem>
       </Card>
    );
  }

  render() {
    this.AmbilDataFit();
    return (
      <ScrollView style={styles.mainContainer}> 
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />  
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

