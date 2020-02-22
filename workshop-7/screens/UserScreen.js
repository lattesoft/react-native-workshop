import * as React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {userLogout} from '../redux/actions/userActions';

class UserScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Button onPress={()=>{
          this.props.userLogout();
          this.props.navigation.navigate("Login");
        }} title={"Logout"} />
        <Text>ID: {this.props.user.profile.id}</Text>
        <Text>Name: {this.props.user.profile.name}</Text>
        <Text>Year: {this.props.user.profile.year}</Text>
      </ScrollView>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
};

export default connect(mapStateToProps,{userLogout})(UserScreen);