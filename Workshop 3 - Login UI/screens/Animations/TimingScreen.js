import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Animated,
  Easing,
  ScrollView
} from "react-native";

export default class TimingScreen extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
    this.spin();
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => this.animate());
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear
    }).start(() => this.spin());
  }

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    });
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    });
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    });
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["0deg", "180deg", "0deg"]
    });
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <ScrollView style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={{
            width: 300,
            height: 300,
            transform: [{ rotate: spin }]
          }}
          source={{
            uri:
              "https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
          }}
        />
        <Animated.View
          style={{
            marginLeft,
            height: 30,
            width: 40,
            backgroundColor: "red"
          }}
        />
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: "blue"
          }}
        />
        <Animated.View
          style={{
            marginLeft: movingMargin,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: "orange"
          }}
        />
        <Animated.Text
          style={{
            fontSize: textSize,
            marginTop: 10,
            color: "green"
          }}
        >
          Animated Text!
        </Animated.Text>
        <Animated.View
          style={{
            transform: [{ rotateX }],
            marginTop: 50,
            height: 30,
            width: 40,
            backgroundColor: "black"
          }}
        >
          <Text style={{ color: "white" }}>Hello from TransformX</Text>
        </Animated.View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
