'use strict';

import React, { Component } from "react"
import { View, StyleSheet, Text, Dimensions } from "react-native"
let {width, height} = Dimensions.get('window')

export default class My extends Component {
    constructor(props) {
        super(props)
    }
    goBack() {
        this.props.navigator.pop()
    }
    render(){
        return (
            <View style={styles.myContainer}>
                <Text onPress={this.goBack.bind(this)}>my</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    myContainer: {
        width: width,
        height: height,
        backgroundColor: "rgba(0,0,0,.5)"
    }
})