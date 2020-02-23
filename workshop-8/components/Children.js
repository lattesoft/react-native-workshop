import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Children extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Mango"
    };
  }

  componentDidMount() {

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      text: nextProps.text
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.text != nextState.text;
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <View>
        <Text>{`Text is ${this.state.text}. ${new Date()}`}</Text>
      </View>
    );
  }
}
