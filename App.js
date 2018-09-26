import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Constants } from 'expo';
export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, maxHeight: 30, backgroundColor: '#2ea' }} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            backgroundColor: 'grey',
          }}>
          <View
            style={{
              flex: 1,
              minWidth: 85,
              backgroundColor: '#aaa',
              alignItems: 'center',
            }}
          />
          <View style={{ flex: 2, minWidth: 35, backgroundColor: '#fff' }} />
          <View
            style={{
              flex: 3,
              minWidth: 125,
              backgroundColor: '#aaa',
              alignItems: 'center',
            }}
          />
          <View style={{ flex: 4, minWidth: 35, backgroundColor: '#fff' }} />
          <View
            style={{
              flex: 5,
              minWidth: 75,
              backgroundColor: '#aaa',
              alignItems: 'center',
            }}
          />
        </View>
        <View style={{ flex: 3, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 4, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
