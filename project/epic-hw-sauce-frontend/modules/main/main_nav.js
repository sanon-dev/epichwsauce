import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import ScanUpload from "./scan_upload.js";
import SavedScans from "./saved_scans.js";

const Tab = createBottomTabNavigator();

function MainNav({ username, token, onLogout }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "ScanUpload") {
            iconName = "camera";
          } else if (route.name === "SavedScans") {
            iconName = "bookmark";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2196F3",
        tabBarInactiveTintColor: "#999999",
      })}
    >
      <Tab.Screen name="Home">
        {(props) => <Home {...props} username={username} onLogout={onLogout} />}
      </Tab.Screen>
      <Tab.Screen name="ScanUpload">
        {(props) => <ScanUpload {...props} token={token} />}
      </Tab.Screen>
      <Tab.Screen name="SavedScans">
        {(props) => <SavedScans {...props} token={token} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default MainNav;
