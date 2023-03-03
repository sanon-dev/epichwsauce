import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


function HomeScreen() {
  return (
    <View style={{ backgroundColor: 'cadetblue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function ScanScreen() {
  return (
    <View style={{ backgroundColor: 'cadetblue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Camera functionality will go here</Text>
    </View>
  );
}

function SavedScanScreen() {
  return (
    <View style={{ backgroundColor: 'cadetblue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Saved scans will go here</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home-outline';
            } else if (route.name === 'Saved Scans') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Scan') {
              iconName = 'ios-camera-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Saved Scans" component={SavedScanScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}