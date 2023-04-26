import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./welcome";
import Register from "./register";
import Login from "./login";

const Stack = createStackNavigator();

const AuthStack = ({ onAuth }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Register">
      {(props) => <Register onAuth={onAuth} {...props} />}
    </Stack.Screen>
    <Stack.Screen name="Login">
      {(props) => <Login onAuth={onAuth} {...props} />}
    </Stack.Screen>
  </Stack.Navigator>
);
export default AuthStack;
