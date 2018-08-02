'use strict';

import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import { Navigator } from "react-native-deprecated-custom-components"
import Wrapper from './component/Wrapper'
import Home from "./pages/Home"
//import Events from './util/event'

export default class Navigation extends Component{
    constructor(props){
      super(props)
    }
    render(){

        return Platform.OS == "ios"?(
          <Navigator
            initialRoute={{component: Wrapper}}
            configureScene={() => Navigator.SceneConfigs.FloatFromLeft}
            renderScene={(route, navigator) => {
                  return <route.component navigator={navigator} {...route.args}/>
                }
            }
          />
        ):(
          <View style={{flex: 1,display: 'flex'}}>
            <StatusBar
             backgroundColor="#FFE403"
             barStyle="light-content"
           />
           {/* <Home navigator={navigator}/> */}
            <Navigator
              initialRoute={{component: Wrapper}}
              configureScene={() => Navigator.SceneConfigs.FloatFromLeft}
              renderScene={(route, navigator) => {
                    return <route.component navigator={navigator} {...route.args}/>
                  }
              }
            />
          </View>
        )
    }
}
