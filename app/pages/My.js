"use strict";

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from "react-native";
let { width, height } = Dimensions.get("window");
import px2dp from "../util";

import Icon from "react-native-vector-icons/FontAwesome";

export default class My extends Component {
  constructor(props) {
    super(props);
  }
  goBack(e) {
    this.props.leftPress(e);
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.myContainer}
        onPress={e => this.goBack(e)}
        // onPress={() => this.goBack}
      >
        <View style={styles.inner}>
          <View style={styles.header}>
              <Text>
                <Icon name="user-circle" color="#794038" size={100} />
              </Text>
              <Text />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  myContainer: {
    width: width,
    height: height,
    backgroundColor: "rgba(0,0,0,.5)"
  },
  inner: {
    width: px2dp(280),
    height: height,
    backgroundColor: "#fff",
    // backgroundImage: require('../../img/myHeaderBg.png')
  },
  header: {
    width: "100%",
    height: "30%"
  }
});
