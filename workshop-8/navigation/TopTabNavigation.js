import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import EasingScreen from "../screens/Animations/EasingScreen";
import TimingScreen from "../screens/Animations/TimingScreen";
import SpringScreen from "../screens/Animations/SpringScreen";
import ParallelScreen from "../screens/Animations/ParallelScreen";

const Tab = createMaterialTopTabNavigator();

export default TopTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="easing" component={EasingScreen} />
      <Tab.Screen name="timing" component={TimingScreen} />
      <Tab.Screen name="spring" component={SpringScreen} />
      <Tab.Screen name="parallel" component={ParallelScreen} />
    </Tab.Navigator>
  );
};
