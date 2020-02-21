import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { appStyles } from "../../constants/Layout";

export default class Login extends Component {
  render() {
    return (
      <View style={appStyles.centerContent}>
        <View style={{ minWidth: "100%", paddingHorizontal: 20 }}>
          <TextInput
            placeholder="Email Address"
            style={appStyles.textInput}
            keyboardType="email-address"
          />
          <TextInput placeholder="Password" style={appStyles.textInput} />
          <TouchableOpacity style={appStyles.buttonStyle}>
            <Text style={appStyles.textStyle()}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginVertical: 10 }}>
          <Text style={appStyles.textStyle("#000", 16, "bold")}>
            Forgot the Password?
          </Text>
        </TouchableOpacity>
        <View style={appStyles.rowItem}>
          <Text style={appStyles.textStyle("#000")}>Not a member?</Text>
          <TouchableOpacity>
            <Text style={appStyles.textStyle("#000", 16, "bold")}>
              {" "}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
