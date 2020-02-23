import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Animated,
  TouchableHighlight,
  ScrollView,
  Easing
} from "react-native";

export default class EasingScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  animate = easing => {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing
    }).start();
  };

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 260]
    });
    const backgroundColor = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["red", "blue"]
    });
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.block, { marginLeft, backgroundColor }]}
        />
        <ScrollView>
          <Text style={{ textAlign: "center" }}>
            Scroll up for more animations
          </Text>
          <Button easing="Bounce" onPress={() => this.animate(Easing.bounce)} />
          <Button easing="Cubic" onPress={() => this.animate(Easing.cubic)} />
          <Button easing="Back" onPress={() => this.animate(Easing.back(2))} />
          <Button
            easing="Elastic"
            onPress={() => this.animate(Easing.elastic(2))}
          />
          <Button easing="Ease" onPress={() => this.animate(Easing.ease)} />
          <Button
            easing="InOut"
            onPress={() => this.animate(Easing.inOut(Easing.quad))}
          />
          <Button
            easing="In"
            onPress={() => this.animate(Easing.in(Easing.quad))}
          />
          <Button
            easing="Out"
            onPress={() => this.animate(Easing.out(Easing.quad))}
          />
          <Button easing="Sin" onPress={() => this.animate(Easing.sin)} />
          <Button easing="Linear" onPress={() => this.animate(Easing.linear)} />
          <Button easing="Quad" onPress={() => this.animate(Easing.quad)} />
        </ScrollView>
      </View>
    );
  }
}

const Button = ({ onPress, easing }) => (
  <TouchableHighlight style={styles.button} onPress={onPress}>
    <Text>{easing}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  button: {
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#ededed",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  block: {
    width: 50,
    height: 50,
    backgroundColor: "red"
  }
});
