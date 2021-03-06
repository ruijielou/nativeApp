"use strict";

import React, { Component } from "react";

import { View, StyleSheet, Text, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
let { width, height } = Dimensions.get("window");

export default class Message extends Component {
    constructor(props) {
        super(props);
      }
      goBack() {
        this.props.navigator.pop();
      }
  render() {
    return (
      <View style={styles.MessageContainer}>
        <View style={styles.goBack}>
          <Ionicons
          onPress={() => this.goBack()}
            name="ios-arrow-back"
            style={{ paddingLeft: 6 }}
            color="#FFFFFF"
            size={30}
          />
        </View>
        <View style={styles.MessageContent}>
          <Text>这是消息提示页面</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MessageContainer: {
    height: height,
    width: width,
    display: "flex",
    flexDirection: "column"
  },
  goBack: {
    height: 30
  },
  MessageContent: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});
