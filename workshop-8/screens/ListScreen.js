import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  RefreshControl,
  TouchableOpacity
} from "react-native";
import { appStyles } from "../constants/Layout";
import { Icon } from "native-base";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import ProductCard from "../components/ProductCard";
import SearchBox from "../components/SearchBox";
import ProductCardAnimation from "../components/ProductCardAnimation";
import { SafeAreaView } from "react-native-safe-area-context";

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchProducts: [],
      searchText: "",
      page: 1,
      lastPage: 1,
      refreshing: false
    };
  }

  componentDidMount() {
    this.fetchApi(this.state.page);
  }

  fetchApi = (page, loadMore = false) => {
    if (page == this.state.lastPage && this.state.lastPage != 1) {
      return;
    }
    axios
      .get(
        `https://grocery.walmart.com/v4/api/products/search?storeId=1855&page=${page}&query=icescream&count=10`
      )
      .then(res => {
        this.setState({
          products: loadMore
            ? this.state.products.concat(res.data.products)
            : res.data.products,
          searchProducts: loadMore
            ? this.state.products.concat(res.data.products)
            : res.data.products,
          page: page + 1,
          lastPage: Math.ceil(res.data.totalCount / 10)
        });
      });
  };

  handleSearch = text => {
    let items = this.state.products.filter(item =>
      item.basic.name.toLowerCase().match(text.toLowerCase())
    );
    this.setState({ searchProducts: items, searchText: text });
  };

  onRefresh = () => {
    this.fetchApi(1);
  };

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 100;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  render() {
    let { searchProducts, searchText, page, lastPage } = this.state;
    return (
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <FlatList
          scrollEnabled
          numColumns={2}
          data={searchProducts}
          keyExtractor={(item, index) => `${index}`}
          extraData={this.state}
          renderItem={({ item, index }) => (
            <ProductCard {...this.props} item={item} />
          )}
          ListHeaderComponent={
            <SearchBox
              {...this.props}
              searchText={searchText}
              onChangeText={this.handleSearch}
            />
          }
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          // onEndReached={() => this.fetchApi(page, page != lastPage)}
          // onEndReachedThreshold={10}
          onScroll={({ nativeEvent }) => {
            if (this.isCloseToBottom(nativeEvent)) {
              this.fetchApi(page, page != lastPage);
            }
          }}
        />
      </SafeAreaView>
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
