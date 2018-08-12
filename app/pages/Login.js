"use strict";

import React, { Component } from "react";

import { View, StyleSheet, Text, Dimensions } from "react-native";
let { width, height } = Dimensions.get("window");

export default class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }
}
