import React, { Component } from "react";
import { Text, View, ActionSheetIOS, TouchableOpacity } from "react-native";
import { appStyles } from "../constants/Layout";
import { Icon } from "native-base";
import Colors from "../constants/Colors";

const BUTTONS = ["Option 0", "Option 1", "Option 2", "Destruct", "Cancel"];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

export default class UserCircle extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: Colors.colorNavy,
          height: 45,
          width: 45,
          alignItems: "center",
          justifyContent: "center",
          ...appStyles.boxShadow,
          borderRadius: 100,
          position: "absolute",
          right: 10,
          top: 10
        }}
        onPress={() =>
          this.props.showModal([
            {
              text: "Logout",
              color: "#000",
              onPress: () => this.props.setLogout()
            }
          ])
        }
      >
        <Icon name="user" type="FontAwesome5" style={{ color: "#fff" }} />
      </TouchableOpacity>
    );
  }
}
