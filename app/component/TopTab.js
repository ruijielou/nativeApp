"use strict";

import React, { Component } from "react";

import { View, StyleSheet, Text, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
let { width, height } = Dimensions.get("window");

export default class TopTab extends Component {
    constructor(props) {
        super(props);
        console.log(props)
      }
      goBack() {
       this.props.press()
        // this.props.navigator.pop();
      }
  render() {
    return (
        <View style={styles.goBack}>
          <Ionicons
          onPress={() => this.goBack()}
            name="ios-arrow-back"
            style={{ paddingLeft: 6 }}
            color="#FFFFFF"
            size={30}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({

  goBack: {  
    height: height,
    width: width,
    height: 30
  }
});
