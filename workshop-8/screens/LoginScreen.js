import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "../components/SignIn/Login";
import Register from "../components/SignIn/Register";
import { StackActions } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { id: 1, source: require("../assets/images/logo-digital.png") },
        { id: 2, source: require("../assets/images/logo-latte.png") },
        { id: 3, source: require("../assets/images/logo-little.png") }
      ],
      sliderIndex: 0,
      maxSlider: 2
    };
    this.interval = null;
  }

  scrollToIndex = (index, animated) => {
    this.listRef && this.listRef.scrollToIndex({ index, animated });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { sliderIndex, maxSlider } = this.state;
      let nextIndex = 0;

      if (sliderIndex < maxSlider) {
        nextIndex = sliderIndex + 1;
      }

      this.scrollToIndex(nextIndex, true);
      this.setState({ sliderIndex: nextIndex });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let { images } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: "center", flex: 1 }}>
            <FlatList
              ref={c => {
                this.listRef = c;
              }}
              horizontal
              pagingEnabled
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              snapToAlignment="center"
              data={images}
              extraData={this.state}
              keyExtractor={(item, index) => `${item.id}`}
              renderItem={({ item, index }) => (
                <View style={{ padding: 20 }}>
                  <Image
                    key={index}
                    source={item.source}
                    style={{
                      resizeMode: "contain",
                      width: width - 40,
                      height: 250
                    }}
                  />
                </View>
              )}
            />
            <View style={{ width: "100%", paddingHorizontal: 20 }}>
              <TextInput placeholder="Username" style={styles.textInput} />
              <TextInput placeholder="Password" style={styles.textInput} />
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => this.props.onSignIn()}
              >
                <Text style={styles.textStyle()}>Login</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ marginVertical: 10 }}>
              <Text style={styles.textStyle("#000", 16, "bold")}>
                Forgot the Password?
              </Text>
            </TouchableOpacity>
            <View style={styles.rowItem}>
              <Text style={styles.textStyle("#000")}>Not a member?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Regis")}
              >
                <Text style={styles.textStyle("#000", 16, "bold")}>
                  {" "}
                  Register
                </Text>
              </TouchableOpacity>
            </View>
            {/* <Login /> */}
            {/* <Register /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1 },
  textInput: {
    height: 40,
    fontFamily: "space-mono",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10
  },
  textStyle: (color = "#fff", size = 16, weight = "normal") => ({
    fontFamily: "space-mono",
    fontSize: size,
    color: color,
    fontWeight: weight
  }),
  buttonStyle: {
    backgroundColor: "#0f143b",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center"
  },
  rowItem: { flex: 1, flexDirection: "row", alignItems: "center" }
});
