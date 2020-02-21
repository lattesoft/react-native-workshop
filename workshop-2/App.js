import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

function HomeScreen({navigation}){
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  )
}

function DetailScreen({navigation}){
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('DetailScreen')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
