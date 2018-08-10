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
    this.state = {
      left: Dimensions.get("window").width*2
    }
  }
  goTo() {
    this.setState({left: 0})
  }
  leftPress(e) {
    console.log('leftpress')
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({left: Dimensions.get("window").width*2})
  }
  render() {
    return (
      <View style={styles.homeContainer}>
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
          <BaiduMapDemo />
        </View>
        <View style={[styles.my, {left:this.state.left}]} left={this.state.left}>
          <My leftPress={this.leftPress.bind(this)}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  my: {
position: "absolute",
zIndex: 999
  },
  homeContainer: {
    flex: 1,
    display: 'flex',
    // width: Dimensions.get("window").width-200, //窗口宽度
    // width: Dimensions.get("window").height-100 //窗口宽度
  },
  home: {
    display: 'flex',
    flex: 1
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
