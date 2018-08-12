import React, { Component } from "react";

import {
  Dimensions,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  BackHandler,
  ToastAndroid
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Feather";
import px2dp from "../util";
import My from "./My";
import Message from "./Message";
import { MapView, Marker } from "react-native-amap3d";
import Geolocation from "Geolocation";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: Dimensions.get("window").width * 2,
      logs: [],
      coordinate: {
        latitude: 0,
        longitude: 0
      },
      display: "none"
    };

    Geolocation.getCurrentPosition(res => {
      this.setState({
        coordinate: {
          latitude: res.coords.latitude + 0,
          longitude: res.coords.longitude
        }
      });
    });
  }

  componentWillMount() {
    // console.warn(Platform.OS)
    // if (Platform.OS === 'android') {
    BackHandler.addEventListener("hardwareBackPress", this.onBackAndroid);
    // }
  }
  onBackAndroid = () => {
    const navigator = this.props.navigator;
    const routers = navigator.getCurrentRoutes();
    console.log(routers)
    console.log("当前路由长度：" + routers.length);
    if (routers.length >= 2) {
      navigator.pop();
      return true; //接管默认行为
    } else {
      //到了主页了
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //最近2秒内按过back键，可以退出应用。
        return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show("再按一次退出应用", ToastAndroid.SHORT);
      return true;
    }
    // return false;//默认行为
  }

  goTo() {
    this.props.navigator.push({ component: My });
  }
  goMessage() {
    this.props.navigator.push({ component: Message });
  }
  leftPress() {
    this.setState({ left: Dimensions.get("window").width * 2 });
    console.log(this.state);
  }
  _onMarkerPress(res) {
    console.log(res);
    // this.setState({display: 'block'})
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
            <Text style={styles.left} onPress={() => this.goMessage()}>
              <Icons name="bell" color="#794038" size={30} />
            </Text>
          </View>
          <MapView
            style={styles.map}
            locationEnabled
            coordinate={{
              latitude: this.state.coordinate.latitude,
              longitude: this.state.coordinate.longitude
            }}
            zoomLevel={13}
            showsIndoorMap
          >
            <Marker
              title="自定义图片"
              image="flag"
              coordinate={{
                latitude: 34.741197,
                longitude: 113.753701
              }}
            >
              <View style={[styles.popup, { display: this.state.display }]}>
                <Text />
              </View>
            </Marker>
          </MapView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  popup: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 999999,
    backgroundColor: "rgba(0,0,0,.5)"
  },
  map: {
    flex: 1
  },
  my: {
    position: "absolute",
    zIndex: 999
  },
  homeContainer: {
    flex: 1,
    display: "flex"
    // width: Dimensions.get("window").width-200, //窗口宽度
    // width: Dimensions.get("window").height-100 //窗口宽度
  },
  home: {
    display: "flex",
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
