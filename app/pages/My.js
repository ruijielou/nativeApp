"use strict";

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from "react-native";
let { width, height } = Dimensions.get("window");
import px2dp from "../util";

import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

export default class My extends Component {
  constructor(props) {
    super(props);
  }
  goBack() {
    // this.props.leftPress();
    // console.log('ddddddddd')
    this.props.navigator.pop()
  }
  render() {
    return (
      <View
        style={styles.myContainer}
        
      >
        <View style={styles.inner}>
          <View style={styles.header}>
          <ImageBackground source={require("../../img/myHeaderBg.png")} style={{width: "100%", height: "100%"}}>
            <View style={{paddingTop: 30, paddingLeft: 5, paddingRight: 5, display: "flex", flex: 1, flexDirection: "row"}}>
              <Text style={styles.headerImg}>
                  <Icon name="user-circle" color="#794038" size={60} />
              </Text>
              <View style={styles.headerContent}>
                  <Text style={{color: "#794038", fontWeight:"bold", fontSize: 16}}>1336854678</Text>
                  <Text style={{fontSize: 16}}>普通用户</Text>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={{textAlign: "center", color: "#794038", fontWeight:"bold", fontSize:18, lineHeight: 40}}>登录</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          </View>
          <View style={styles.myContent}>
            <View style={{padding: 10, display: "flex", width: "100%", flexDirection: "row", borderBottomColor: "#ccc", borderBottomWidth: 1, borderStyle: "solid"}}>
              <Text style={{ paddingRight: 10, color: "#794038"}}>我的星级</Text>
              <Icon name="star" style={{paddingLeft: 6}} color="#FFE403" size={20} />
              <Icon name="star" style={{paddingLeft: 6}} color="#FFE403" size={20} />
              <Icon name="star" style={{paddingLeft: 6}} color="#FFE403" size={20} />
              <Icon name="star" style={{paddingLeft: 6}} color="#CCCCCC" size={20} />
              <Icon name="star" style={{paddingLeft: 6}} color="#CCCCCC" size={20} />
            </View>
            <View style={{width: "100%"}}>
              <FlatList
                data={[{key: '个人信息', ico: 'user'}, {key: '帮助', ico: 'help-with-circle'}, {key: '关于我们', ico: "info-with-circle"}, {key:'意见反馈', ico: "typing"}]}
                renderItem={({item}) => <Text style={styles.listBtn}><Text style={{flex: 1, textAlign: "left"}}>
                <Entypo name={item.ico} color="#794038"  style={{fontSize: 16}}></Entypo></Text>
                <Text style={{flex: 1, textAlign:"left"}}>{item.key}</Text>
                <Text style={{flex: 1, textAlign: "right"}}>
                <Entypo name="chevron-small-right" color="#794038" style={{fontSize: 16, position: "absolute", right: 0}}></Entypo></Text></Text>}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.mypop} onPress={() => this.goBack()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myContainer: {
    width: width,
    height: height,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "rgba(0,0,0,.5)"
  },
  inner: {
    width: px2dp(300),
    height: height,
    backgroundColor: "#fff"
  },
  mypop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0)"
  },
  header: {
    width: "100%",
    height: "20%"
  },
  headerImg:{
    flex: 2,
    marginRight: 4
  },
  headerContent:{
    flex: 3,
    marginRight: 4,
    paddingTop: 8
  },
  btn:{
    width: 75,
    height: 40,
    borderRadius: 15,
    borderColor: "#794038",
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: "rgba(0,0,0,0)",
    marginTop: 8
  },
  myContent: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  },
  listBtn: {
    width: "100%", 
    height: 40, 
    lineHeight: 40, 
    fontSize:16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingLeft: 10,
    display: "flex"
  }
});
