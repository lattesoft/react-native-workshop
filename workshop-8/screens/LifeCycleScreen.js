import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  Button,
  FlatList,
  RefreshControl
} from "react-native";
import Children from "../components/Children";
import Axios from "axios";
import Moment from "moment";

export default class LifeCycleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      products: [],
      refreshing: false,
      page: 1,
      lastPage: 1
    };
  }

  handleChange = text => {
    this.setState({ text: text });
  };

  componentDidMount() {
    this.fetchApi(1);
  }

  fetchApi = page => {
    Axios.get(
      `https://grocery.walmart.com/v4/api/products/search?storeId=1855&page=${page}&query=icescream&count=10`
    ).then(res =>
      this.setState({
        products: [...this.state.products, ...res.data.products],
        refreshing: false,
        page: page + 1,
        lastPage: Math.ceil(res.data.totalCount / 10)
      })
    );
  };

  handleRefresh = () => {
    this.fetchApi(1);
  };

  render() {
    return (
      <View>
        {/* <TextInput
          onChangeText={text => this.handleChange(text)}
          style={{ borderWidth: 1, borderColor: "red" }}
        />
        <Children text={this.state.text} />
        <Button
          title="Button"
          color="red"
          onPress={() => this.setState({ text: "Apple" })}
        /> */}
        <FlatList
          data={this.state.products}
          keyExtractor={({ item, index }) => index}
          renderItem={({ item }) => (
            <View style={{ height: 100 }}>
              <Text>{item.basic.name}</Text>
            </View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.handleRefresh()}
            />
          }
          onEndReached={() => this.fetchApi(this.state.page)}
          onEndReachedThreshold={10}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
