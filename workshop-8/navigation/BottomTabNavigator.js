import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import Test from "../screens/Test";
import ListScreen from "../screens/ListScreen";
import TopTabNavigation from "./TopTabNavigation";
import LifeCycleScreen from "../screens/LifeCycleScreen";
import { appStyles } from "../constants/Layout";
import {
  View,
  Modal,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import PrivateHoc from "../components/PrivateHoc";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator(props) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  props.navigation.setOptions({ headerTitle: getHeaderTitle(props.route) });

  return (
    <View style={appStyles.container}>
      <BottomTab.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        tabBarOptions={{
          showLabel: false,
          style: {
            ...appStyles.boxShadow
          }
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={PrivateHoc(ListScreen)}
          // children={() => <NewComponent name="TEST" />}
          options={{
            title: "Get Started",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="ios-home" />
            )
          }}
        />
        <BottomTab.Screen
          name="Links"
          component={LifeCycleScreen}
          options={{
            title: "Resources",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-book" />
            )
          }}
        />
        <BottomTab.Screen
          name="Animations"
          component={TopTabNavigation}
          options={{
            title: "Animations",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="md-settings" />
            )
          }}
        />
      </BottomTab.Navigator>
      {/* <BottomModal /> */}
    </View>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "ListItem Workshop";
    case "Links":
      return "Links to learn more";
    case "Test":
      return "Test";
  }
}
