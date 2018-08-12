"use strict";

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Button
} from "react-native";
let { width, height } = Dimensions.get("window");
import px2dp from "../util";
import Login from "./Login"

import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
const overrideRenderItem = ({ item, index, section: { title, data } }) => (
  <Text key={index}>
    Override
    {item}
  </Text>
);
export default class My extends Component {
  constructor(props) {
    super(props);
  }
  goBack() {
    // this.props.leftPress();
    // console.log('ddddddddd')
    this.props.navigator.pop();
  }
  goLogin() {
    this.props.navigator.push({ component: Login });
  }
  render() {
    return (
      <View style={styles.myContainer}>
        <View style={styles.inner}>
          <View style={styles.header}>
            <ImageBackground
              source={require("../../img/myHeaderBg.png")}
              style={{ width: "100%", height: "100%" }}
            >
              <View
                style={{
                  paddingTop: 30,
                  paddingLeft: 5,
                  paddingRight: 5,
                  display: "flex",
                  flex: 1,
                  flexDirection: "row"
                }}
              >
                <Text style={styles.headerImg}>
                  <Icon name="user-circle" color="#794038" size={60} />
                </Text>
                <View style={styles.headerContent}>
                  <Text
                    style={{
                      color: "#794038",
                      fontWeight: "bold",
                      fontSize: 16
                    }}
                  >
                    1336854678
                  </Text>
                  <Text style={{ fontSize: 16 }}>普通用户</Text>
                </View>
                <TouchableOpacity style={styles.btn} 
                onPress={()=>this.goLogin()}>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#794038",
                      fontSize: 18,
                      textAlignVertical: 'center'
                    }}
                  >
                    登录
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.myContent}>
            <View
              style={{
                padding: 10,
                display: "flex",
                width: "100%",
                flexDirection: "row",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                borderStyle: "solid"
              }}
            >
              <Text style={{ paddingRight: 10, color: "#794038" }}>
                我的星级
              </Text>
              <Icon
                name="star"
                style={{ paddingLeft: 6 }}
                color="#FFE403"
                size={20}
              />
              <Icon
                name="star"
                style={{ paddingLeft: 6 }}
                color="#FFE403"
                size={20}
              />
              <Icon
                name="star"
                style={{ paddingLeft: 6 }}
                color="#FFE403"
                size={20}
              />
              <Icon
                name="star"
                style={{ paddingLeft: 6 }}
                color="#CCCCCC"
                size={20}
              />
              <Icon
                name="star"
                style={{ paddingLeft: 6 }}
                color="#CCCCCC"
                size={20}
              />
            </View>
            <View style={styles.container}>
              <FlatList
                data={[
                  { key: "个人信息", ico: "md-contact" },
                  { key: "帮助", ico: "ios-help-circle-outline" },
                  { key: "关于我们", ico: "ios-people" },
                  { key: "意见反馈", ico: "md-create" }
                ]}
                renderItem={({ item }) => (
                  <View style={styles.item}>
                    <Ionicons name={item.ico} color="#794038" size={20} />
                    <Text style={styles.itemContent}>{item.key}</Text>
                    <Ionicons
                      name="ios-arrow-forward"
                      color="#794038"
                      size={20}
                    />
                  </View>
                )}
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
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    height: 44,
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderStyle: "solid"
  },
  itemContent: {
    flex: 1,
    paddingLeft: 5
  },
  myContainer: {
    width: width,
    height: height,
    display: "flex",
    flexDirection: "row",
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
  headerImg: {
    flex: 2,
    marginRight: 4
  },
  headerContent: {
    flex: 3,
    marginRight: 4,
    paddingTop: 8
  },
  btn: {
    width: 75,
    height: 35,
    padding: 5,
    borderRadius: 15,
    borderColor: "#794038",
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: "transparent",
    marginTop: 8
  },
  myContent: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  }
});
