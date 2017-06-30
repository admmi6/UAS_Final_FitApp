import React, { Component } from 'react';
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
      dataSource: ds,
    }
  }

  

  render() {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this._renderRow.bind(this)}
        renderSeparator = {(sectionID, rowID) =>
          <View
            style={styles.style_separator}
            key={`${sectionID} - ${rowID}`}
          />}
      />
    );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
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