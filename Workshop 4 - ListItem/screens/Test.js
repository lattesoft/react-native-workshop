import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  TextInput,
  Animated,
  Easing
} from "react-native";
import { appStyles } from "../constants/Layout";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }
  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear
    }).start(() => this.spin());
  }

  renderTimingAnimation = () => {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{ rotate: spin }]
          }}
          source={{
            uri:
              "https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
          }}
        />
      </View>
    );
  };

  renderTextInput = () => {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10
          }}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TouchableOpacity
          style={appStyles.buttonStyle}
          onPress={() => this.props.navigation.navigate("Animated")}
        >
          <Text style={appStyles.textStyle()}>Animations</Text>
        </TouchableOpacity>
      </View>
    );
    return this.renderTimingAnimation();
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white"
  }
});
