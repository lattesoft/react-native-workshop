import React, { Component } from "react";
import {
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { appStyles } from "../constants/Layout";
import { connect } from "react-redux";
import { Actions } from "../store/actions";

const PrivateHoc = WrapComponent => {
  class PrivateScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showModal: false,
        buttons: []
      };
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <WrapComponent
            {...this.props}
            showModal={buttons =>
              this.setState({ showModal: true, buttons: buttons })
            }
            hideModal={() => this.setState({ showModal: false })}
          />
          <Modal
            animationType="slide"
            transparent
            visible={this.state.showModal}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View
              style={{
                // backgroundColor: "#000",
                // opacity: 0.3,
                flex: 1,
                justifyContent: "flex-end"
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => this.setState({ showModal: false })}
              >
                <View
                  style={{
                    backgroundColor: "#000",
                    opacity: 0.3,
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0
                  }}
                ></View>
              </TouchableWithoutFeedback>
              {this.state.buttons.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => item.onPress()}
                  style={{
                    backgroundColor: "#fff",
                    padding: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottomColor: "#8080807F",
                    borderBottomWidth: 1
                  }}
                >
                  <Text style={appStyles.textStyle(item.color || "#000")}>
                    {item.text}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Modal>
        </View>
      );
    }
  }

  return connect(store => ({ user: store.user }), { ...Actions })(
    PrivateScreen
  );
};

export default PrivateHoc;
