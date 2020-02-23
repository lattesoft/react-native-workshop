
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import ListScreen from "../screens/ListScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};
