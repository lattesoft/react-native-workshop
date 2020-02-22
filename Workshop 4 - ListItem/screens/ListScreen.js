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

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          email: "george.bluth@reqres.in",
          first_name: "George",
          last_name: "Bluth",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        },
        {
          id: 2,
          email: "janet.weaver@reqres.in",
          first_name: "Janet",
          last_name: "Weaver",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        },
        {
          id: 3,
          email: "emma.wong@reqres.in",
          first_name: "Emma",
          last_name: "Wong",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
        },
        {
          id: 4,
          email: "eve.holt@reqres.in",
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          email: "charles.morris@reqres.in",
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          email: "tracey.ramos@reqres.in",
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ],
      searchData: [
        {
          id: 1,
          email: "george.bluth@reqres.in",
          first_name: "George",
          last_name: "Bluth",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        },
        {
          id: 2,
          email: "janet.weaver@reqres.in",
          first_name: "Janet",
          last_name: "Weaver",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        },
        {
          id: 3,
          email: "emma.wong@reqres.in",
          first_name: "Emma",
          last_name: "Wong",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
        },
        {
          id: 4,
          email: "eve.holt@reqres.in",
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          email: "charles.morris@reqres.in",
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          email: "tracey.ramos@reqres.in",
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ],
      searchText: "",
      refreshing: false
    };
  }

  handleSearch = text => {
    let items = this.state.data.filter(item =>
      item.first_name.toLowerCase().match(text.toLowerCase())
    );
    this.setState({ searchData: items, searchText: text });
  };

  onRefresh = () => {
    this.setState({ searchData: this.state.data, searchText: "" });
  };

  render() {
    return (
      <View>
        <FlatList
          scrollEnabled
          snapToAlignment="center"
          data={this.state.searchData}
          keyExtractor={(item, index) => `${item.id}`}
          extraData={this.state}
          renderItem={({ item, index }) => (
            <View
              style={{
                backgroundColor: "#FFF",
                padding: 10,
                margin: 10,
                alignItems: "center",
                flexDirection: "row",
                flex: 1,
                ...styles.box_shadow
              }}
            >
              <Image
                source={{ uri: item.avatar }}
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: "cover",
                  borderRadius: 5,
                  marginRight: 10
                }}
              />
              <View style={{ flex: 1 }}>
                <Text style={appStyles.textStyle("#000", 20)} numberOfLines={1}>
                  {item.email}
                </Text>
                <Text style={appStyles.textStyle("#000", 20)} numberOfLines={1}>
                  {`${item.first_name} ${item.last_name}`}
                </Text>
              </View>
            </View>
          )}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="none"
          // removeClippedSubviews={false}
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
