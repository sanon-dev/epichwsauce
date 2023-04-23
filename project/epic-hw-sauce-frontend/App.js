import React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { name as appName } from "./app.json";
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "./components/home_screen";
import ScanUploadScreen from "./components/scan_upload";
import SavedScansScreen from "./components/saved_scans";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 14 },
          activeTintColor: "#2196F3",
          inactiveTintColor: "#999999",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Scan & Upload") {
              iconName = "camera";
            } else if (route.name === "Saved Scans") {
              iconName = "bookmark";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Scan & Upload" component={ScanUploadScreen} />
        <Tab.Screen name="Saved Scans" component={SavedScansScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
