import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  CheckBox
} from "react-native";
import { appStyles } from "../../constants/Layout";

export default class Register extends Component {
  render() {
    return (
      <View style={appStyles.centerContent}>
        <View style={{ minWidth: "100%", paddingHorizontal: 20 }}>
          <TextInput placeholder="Name" style={appStyles.textInput} />
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
        <TouchableOpacity
          style={[
            appStyles.rowItem,
            {
              marginVertical: 10,
              paddingHorizontal: 30,
              maxWidth: "100%"
            }
          ]}
        >
          <CheckBox style={{ borderRadius: 100 }} />
          <Text style={appStyles.textStyle("#000")} numberOfLines={1}>
            I accept the Terms and Conditions
          </Text>
        </TouchableOpacity>
        <View style={appStyles.rowItem}>
          <Text style={appStyles.textStyle("#000")}>Already a member?</Text>
          <TouchableOpacity>
            <Text style={appStyles.textStyle("#000", 16, "bold")}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
