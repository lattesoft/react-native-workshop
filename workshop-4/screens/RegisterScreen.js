import React, { Component } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../constants/Layout";
import Register from "../components/SignIn/Register";
const { width, height } = Dimensions.get("window");

export default class RegisterScreen extends Component {
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
      <SafeAreaView style={appStyles.container}>
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
            <Register {...this.props} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
