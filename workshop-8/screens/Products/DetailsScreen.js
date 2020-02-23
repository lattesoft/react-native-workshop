import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { appStyles } from "../../constants/Layout";
import { Icon } from "native-base";
import Colors from "../../constants/Colors";

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.route.params.item
    };
  }

  componentDidMount() {}

  render() {
    let { item } = this.state;
    return (
      <ScrollView
        style={{ paddingHorizontal: 10, flex: 1, backgroundColor: "#fff" }}
      >
        <View style={{ paddingVertical: 20, marginHorizontal: 20 }}>
          <View
            style={{
              backgroundColor: "#fff",
              flex: 1,
              marginBottom: 10,
              padding: 20,
              ...appStyles.boxShadow
            }}
          >
            <Image
              source={{ uri: item.basic.image.thumbnail }}
              style={{
                height: 200,
                resizeMode: "contain"
              }}
            />
          </View>
          <View style={appStyles.rowItem}>
            <View style={{ flex: 1 }}>
              <Text style={appStyles.textStyle("#000", 20)} numberOfLines={2}>
                {item.basic.name}
              </Text>
              <View style={[appStyles.rowItem, { marginVertical: 5 }]}>
                {[1, 2, 3, 4, 5].map((element, index) => (
                  <Icon
                    key={index}
                    type="FontAwesome5"
                    name="star"
                    solid={element <= (item.detailed.rating || 0)}
                    style={{
                      fontSize: 18,
                      marginRight: index == 4 ? 0 : 5,
                      color: Colors.colorNavy
                    }}
                  />
                ))}
              </View>
            </View>

            <View>
              <Text
                style={[
                  appStyles.textStyle("#000"),
                  {
                    borderWidth: 1,
                    borderColor: Colors.colorNavy,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 10
                  }
                ]}
              >
                {`$${item.store.price.list}`}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={appStyles.textStyle("#000")}>Details</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
