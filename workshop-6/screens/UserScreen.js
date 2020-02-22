import * as React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';

class UserScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Button onPress={()=>{
          this.props.navigation.navigate("Login");
        }} title={"Logout"} />
      </ScrollView>
    );
  }
}

export default UserScreen;