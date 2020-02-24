import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

const SignedOutNav = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        name="Login"
        children={nav => <LoginScreen {...props} {...nav} />}
      />
      <Stack.Screen
        name="Regis"
        children={nav => <RegisterScreen {...props} {...nav} />}
      />
    </Stack.Navigator>
  );
};

export default SignedOutNav;
