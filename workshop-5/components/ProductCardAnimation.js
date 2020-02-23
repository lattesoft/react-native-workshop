import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "native-base";
import React, { Component } from "react";
import { Image, Text, View, TouchableOpacity, Animated } from "react-native";
import { appStyles } from "../constants/Layout";
import Colors from "../constants/Colors";

export default class ProductCardAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = { favorite: false };
    this.springValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spring();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.spring();
  }

  shouldComponentUpdate() {
    return false
  }

  spring = () => {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1
    }).start();
  };

  render() {
    let { favorite } = this.state;
    let { item } = this.props;
    return (
      <Animated.View
        style={{
          backgroundColor: "#FFF",
          padding: 10,
          margin: 10,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flex: 1,
          transform: [{ scale: this.springValue }],
          ...appStyles.boxShadow
        }}
      >
        <View
          style={{
            ...appStyles.rowItem,
            borderColor: Colors.colorNavy,
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 5,
            position: "absolute",
            top: 10,
            left: 10
          }}
        >
          <Icon
            type="FontAwesome5"
            name="star"
            style={{
              ...appStyles.textStyle(Colors.colorNavy, 14),
              marginRight: 5
            }}
            solid
          />
          <Text style={appStyles.textStyle(Colors.colorNavy, 14)}>
            {(item.detailed.rating || 0).toFixed(2)}
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <Image
            source={{ uri: item.basic.image.thumbnail }}
            style={{
              minWidth: "100%",
              height: 200,
              resizeMode: "contain",
              borderRadius: 5
            }}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 170,
            width: "100%"
          }}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,1)"]}
            style={{
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              padding: 5
            }}
          >
            <Text style={appStyles.textStyle("#fff", 16)} numberOfLines={2}>
              {item.basic.name}
            </Text>
          </LinearGradient>
        </View>
        <View style={[appStyles.rowItem, { paddingHorizontal: 10 }]}>
          <Text
            style={[
              appStyles.textStyle(Colors.colorNavy, 20, "bold"),
              { flex: 1 }
            ]}
          >{`$${item.store.price.list}`}</Text>
          <TouchableOpacity
            onPress={() => this.setState({ favorite: !favorite })}
          >
            <Icon
              type="FontAwesome5"
              name="heart"
              style={appStyles.textStyle(Colors.colorNavy, 20, "bold")}
              solid={favorite}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
}
