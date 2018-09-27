import React, { Component } from "react";
import {
  Alert,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from "react-native";
import { Constants } from "expo";
export default class FlexDimensionsBasics extends Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  _onLongPressButton() {
    Alert.alert("You long-pressed the button!");
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.5, backgroundColor: "green" }} />

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "steelblue" }}>
            <TouchableHighlight
              onPress={this._onPressButton}
              underlayColor="gold"
            >
              <View>
                <Image
                  style={{
                    width: 51,
                    height: 51,
                    resizeMode: "contain"
                  }}
                  source={{
                    uri:
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
                  }}
                />
              </View>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 3, backgroundColor: "skyblue" }} />
          <View style={{ flex: 1, backgroundColor: "tomato" }}>
            <TouchableHighlight
              onPress={this._onPressButton}
              underlayColor="tomato"
            >
              <View>
                <Image
                  style={{
                    width: 51,
                    height: 51,
                    resizeMode: "contain"
                  }}
                  source={{
                    uri:
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
                  }}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "black" }} />
          <View style={{ flex: 1 }} />
        </View>

        <View style={{ flex: 5, backgroundColor: "gold" }} />
        <View style={{ flex: 2, backgroundColor: "skyblue" }} />

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "steelblue" }} />
          <View style={{ flex: 1, backgroundColor: "skyblue" }} />
          <View style={{ flex: 1, backgroundColor: "tomato" }} />
          <View style={{ flex: 1, backgroundColor: "steelblue" }} />
          <View style={{ flex: 1, backgroundColor: "skyblue" }} />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("AwesomeProject", () => FlexDimensionsBasics);
