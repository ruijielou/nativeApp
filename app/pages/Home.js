// "use strict";

// import React, { Component } from "react";
// import { View, Text } from "react-native";
// import { MapView, MapTypes, Geolocation } from "react-native-baidu-map";

// export default class Home extends Component {
//   render() {
//     return (
//       <View>
//         <MapView
//           trafficEnabled={this.state.trafficEnabled}
//           baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
//           zoom={this.state.zoom}
//           mapType={this.state.mapType}
//           center={this.state.center}
//           marker={this.state.marker}
//           markers={this.state.markers}
//           style={styles.map}
//           onMarkerClick={e => {
//             console.warn(JSON.stringify(e));
//           }}
//           onMapClick={e => {}}
//         />
//       </View>
//     );
//   }
// }
import React, { Component } from 'react';
  
import {
    Dimensions,
    Button,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
  } from 'react-native';
  
  import BaiduMapDemo from '../component/BaiduMap';
  
  export default class Home extends Component {

  
    render() {
      return (
        <BaiduMapDemo />
      );
    }
  }
