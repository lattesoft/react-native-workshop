import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import SignedOutNav from "./navigation/SignedOutNav";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import DetailsScreen from "./screens/Products/DetailsScreen";
import { appStyles } from "./constants/Layout";
import Colors from "./constants/Colors";

const Stack = createStackNavigator();

export default class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  onSignIn = () => {
    this.setState({ isLogin: true });
  };

  render() {
    return (
      <Stack.Navigator
        // screenOptions={{
        //   headerShown: false
        // }}
        initialRouteName="SignOut"
      >
        {!this.state.isLogin ? (
          <Stack.Screen
            name="SignOut"
            children={() => <SignedOutNav onSignIn={() => this.onSignIn()} />}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Root"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={({ route }) => ({
                headerRight: () => (
                  <TouchableOpacity style={{ marginRight: 15 }}>
                    <Icon
                      type="FontAwesome5"
                      name="heart"
                      style={appStyles.textStyle(Colors.colorNavy, 20, "bold")}
                      solid={true}
                    />
                  </TouchableOpacity>
                )
              })}
            />
          </>
        )}
      </Stack.Navigator>
    );
  }
}
