import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  RefreshControl
} from "react-native";
import { appStyles } from "../constants/Layout";
import { Icon } from "native-base";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchProducts: [],
      searchText: "",
      refreshing: false
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://grocery.walmart.com/v4/api/products/search?storeId=1855&page=1&query=icescream"
      )
      .then(res => {
        this.setState({
          products: res.data.products,
          searchProducts: res.data.products
        });
      });
  }

  handleSearch = text => {
    let items = this.state.products.filter(item =>
      item.basic.name.toLowerCase().match(text.toLowerCase())
    );
    this.setState({ searchProducts: items, searchText: text });
  };

  onRefresh = () => {
    this.setState({ searchData: this.state.data, searchText: "" });
  };

  render() {
    let { searchProducts } = this.state;
    return (
      <View>
        <FlatList
          scrollEnabled
          numColumns={2}
          data={searchProducts}
          keyExtractor={(item, index) => `${index}`}
          extraData={this.state}
          renderItem={({ item, index }) => (
            <View
              style={{
                backgroundColor: "#FFF",
                padding: 10,
                margin: 10,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                flex: 1,
                ...styles.box_shadow
              }}
            >
              <View style={{ padding: 10 }}>
                <Image
                  source={{ uri: item.basic.image.thumbnail }}
                  style={{
                    minWidth: "100%",
                    height: 200,
                    resizeMode: "cover",
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
                  <Text
                    style={appStyles.textStyle("#fff", 16)}
                    numberOfLines={2}
                  >
                    {item.basic.name}
                  </Text>
                </LinearGradient>
              </View>
              

              <Text>TEST</Text>
                
                <Text>TEST</Text>
                <Text>TEST</Text>
            </View>
          )}
          ListHeaderComponent={
            <View
              style={{
                margin: 10,
                padding: 10,
                backgroundColor: "#fff",
                flexDirection: "row",
                alignItems: "center",
                ...styles.box_shadow
              }}
            >
              <Icon
                type="FontAwesome5"
                name="search"
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Search"
                onChangeText={text => this.handleSearch(text)}
                value={this.state.searchText}
                style={[appStyles.textStyle("#000", 20), { flex: 1 }]}
              />
            </View>
          }
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box_shadow: {
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 10
  }
});
