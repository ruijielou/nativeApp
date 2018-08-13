"use strict";

import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import UserRegister from "./UserRegister";
let { width, height } = Dimensions.get("window");
let formWidth = (width / 5) * 4;

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  goToRegister() {
    this.props.navigator.push({ component: UserRegister });
  }

  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.header}>
          <ImageBackground
            source={require("../../img/bg.png")}
            style={{ width: width, flex: 1 }}
          >
            <View style={styles.headerPoto}>
              <Image
                source={require("../../img/loginHeader.png")}
                style={{ width: 70, height: 70 }}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.formInput}>
              <Icon name="user" style={styles.ico} />
              <TextInput
                placeholder="请输入用户名"
                placeholderTextColor="#fff"
                style={{ flex: 1 }}
              />
            </View>
            <View style={styles.formInput}>
              <Icon name="lock" style={styles.ico} />
              <TextInput
                style={{ flex: 1 }}
                placeholder="请输入密码"
                placeholderTextColor="#fff"
              />
            </View>
            <View style={styles.btnGroup}>
              <Text
                style={{ fontSize: 14, color: "#794038" }}
                onPress={this.goToRegister.bind(this)}
              >
                立即注册
              </Text>
              <Text style={{ fontSize: 14, color: "#794038" }}>找回密码</Text>
            </View>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={{ textAlign: "center", color: "#fff" }}>登录</Text>
            </TouchableOpacity>
            <Text
              style={{ color: "#794038", fontSize: 16, textAlign: "center" }}
            >
              服务终端登录
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.otherLoginBtn}>
            <Text
              style={{
                width: 50,
                height: 50,
                borderWidth: 1,
                borderColor: "#00CC33",
                borderStyle: "solid",
                borderRadius: 25,
                textAlign: "center",
                paddingTop: 10,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <Icon name="wechat" style={{ color: "#00CC33", fontSize: 30 }} />
            </Text>
            <Text style={styles.otherLoginBtnExplain}>微信登录</Text>
          </View>
          <View style={styles.otherLoginBtn}>
            <Text
              style={{
                width: 50,
                height: 50,
                borderWidth: 1,
                borderColor: "#6699FF",
                borderStyle: "solid",
                borderRadius: 25,
                textAlign: "center",
                paddingTop: 10,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <Icon name="qq" style={{ color: "#6699FF", fontSize: 30 }} />
            </Text>
            <Text style={styles.otherLoginBtnExplain}>QQ登录</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: width,
    height: height,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  header: {
    width: width,
    flex: 2,
    display: "flex"
  },
  headerPoto: {
    marginLeft: "auto",
    marginTop: 30,
    marginRight: "auto",
    backgroundColor: "#DCCC0E",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  content: {
    width: width,
    flex: 3,
    display: "flex",
    alignItems: "center"
  },
  form: {
    width: formWidth,
    backgroundColor: "#fff",
    marginTop: -50,
    borderRadius: 6,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: formWidth * 0.1,
    paddingRight: formWidth * 0.1,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderRightColor: "#eeeeee",
    borderBottomColor: "#eeeeee"
  },
  formInput: {
    backgroundColor: "#ddd",
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row"
  },
  ico: {
    fontSize: 30,
    color: "#794038",
    textAlignVertical: "center"
  },
  btnGroup: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20
  },
  loginBtn: {
    backgroundColor: "#794038",
    borderRadius: 30,
    padding: 10,
    marginBottom: 10
  },
  footer: {
    flex: 2,
    marginTop: 20,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row"
  },
  otherLoginBtn: {
    display: "flex",
    width: 100
  },
  otherLoginBtnExplain: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center"
  }
});
