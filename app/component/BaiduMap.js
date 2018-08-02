import React, { Component } from "react";
import PropTypes from "prop-types";
import { MapView, MapTypes, Geolocation } from "react-native-baidu-map";

import {
  Button,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";

import Dimensions from "Dimensions";

export default class BaiduMapDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mayType: MapTypes.NORMAL,
      zoom: 13,
      center: {
        longitude: 113.73615,
        latitude: 34.77001
      },
      trafficEnabled: false,
      baiduHeatMapEnabled: false,
      markers: [
        {
          longitude: 113.73100,
          latitude: 34.76973,
          title: "Window of the world"
        },
        {
          longitude: 113.73615,
          latitude: 34.77001,
          title: "hehehe"
        }
      ]
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <MapView
          trafficEnabled={this.state.trafficEnabled}
          baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
          zoom={this.state.zoom}
          mapType={this.state.mapType}
          center={this.state.center}
          marker={this.state.marker}
          markers={this.state.markers}
          
          style={styles.map}
          onMarkerClick={e => {
            console.warn(JSON.stringify(e));
          }}
          onMapClick={e => {}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    height: 40
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    flex: 1,
    width: '100%',
    height: '100%'
  }
});
