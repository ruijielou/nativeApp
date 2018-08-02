import React, { Component } from "react";

import {
  Dimensions,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from "react-native";

import BaiduMapDemo from "../component/BaiduMap";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Feather";
import px2dp from "../util";
import My from "./My";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  goTo() {
    console.log(this.props);
    // console.warn(JSON.stringify(this.props.navigator))
    this.props.navigator.push({ component: My });
  }
  render() {
    return (
      <View style={styles.home}>
        <View style={styles.topBanner}>
          <Text style={styles.left} onPress={this.goTo.bind(this)}>
            <Icon name="user-circle" color="#794038" size={30} />
          </Text>
          <View style={styles.searchView}>
            <TextInput
              ref="search"
              style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder="搜一搜，更便捷"
              placeholderTextColor="#666"
            />
          </View>
          <Text style={styles.left}>
            <Icons name="bell" color="#794038" size={30} />
          </Text>
        </View>
        <My />
        <BaiduMapDemo />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    display: "flex"
  },
  topBanner: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FFE403",
    display: "flex",
    flexDirection: "row"
  },
  left: {},
  searchView: {
    flex: 1,
    paddingHorizontal: 16
    // paddingVertical: 8
  },
  textInput: {
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 0,
    height: px2dp(30),
    borderRadius: px2dp(6),
    backgroundColor: "#fff"
  }
});
