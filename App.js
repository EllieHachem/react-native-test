// Importing React Class from react location
import React from "react";
//importing style sheet,text,view class from react native location
import { StyleSheet, Text, View } from "react-native";
//contains all navigartions regardless type
import { NavigationContainer } from "@react-navigation/native";
//one of main navigation types
import { createStackNavigator } from "@react-navigation/stack";
//importing login  Module from this location
import Login from "./pages/Login";
//importing Register Module in module from this location
import Register from "./pages/Register";
//defult main app function it can be written in arrow but there is many ways to write the function
//To import DashBoard page it is when the user succesfully logged in after the user and user.id if statment work this  if (responseJson.user && resonseJson.user_id) {
//   navigation.navigation("Dashboard");
// }
import DashBoard from "./pages/DashBoard";

// To access internal database of phone/ local storage
import { AsyncStorage } from "react-native";

export default function App() {
  //creating a stack object form the  createStackNavigator class
  const stack = createStackNavigator();
  //returning the view of the main app
  return (
    //  <NavigationContainer> this will contain all navigations usually used in main app
    //<stack.Navigator> will wrap/cover all screen used to navigate in stack style
    //screenOptions is a prop of stacknagivator
    // stack.Screen is a method of the object created from the class createStackNavigator here const stack = createStackNavigator();
    // we pass the name of screen in the component props since the function already made we only put the name of screens with one {} but here in screen option function is not declared yet so we had to use double {{ }} and use name that function like headerShown:False,
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Register" component={Register} />
        <stack.Screen name="DashBoard" component={DashBoard} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
// created an object called styles from the class StyleSheet that will contain all props that contain all the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    position: "absolute",
    top: 50,
  },
  text: {
    color: "green",
  },
});
