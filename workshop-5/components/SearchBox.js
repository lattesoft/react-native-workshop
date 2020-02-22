import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { appStyles } from "../constants/Layout";
import Colors from "../constants/Colors";
import { Icon } from "native-base";

const SearchBox = ({ searchText, onChangeText }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 10,
          alignItems: "center"
        }}
      >
        <Text style={appStyles.textStyle(Colors.colorNavy, 30, "bold")}>
          What would
        </Text>
        <Text style={appStyles.textStyle(Colors.colorNavy, 30, "bold")}>
          you want to buy?
        </Text>
      </View>

      <View style={appStyles.rowItem}>
        <View
          style={{
            margin: 10,
            padding: 10,
            backgroundColor: "#fff",
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            marginRight: 0,
            borderTopEndRadius: 0,
            borderBottomEndRadius: 0,
            ...appStyles.boxShadow
          }}
        >
          <TextInput
            placeholder="Search"
            onChangeText={text => onChangeText(text)}
            value={searchText}
            style={[appStyles.textStyle("#000", 20), { flex: 1 }]}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.colorNavy,
            marginRight: 10,
            padding: 10,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            ...appStyles.boxShadow
          }}
        >
          <Icon type="FontAwesome5" name="search" style={{ color: "#fff" }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBox;
