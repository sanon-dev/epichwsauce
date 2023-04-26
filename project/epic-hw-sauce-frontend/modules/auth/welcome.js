import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button , DefaultTheme} from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";


const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to EpicHWSauce</Text>
          <Text style={styles.subheading}>
            The best way to manage your homework
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Login')}
            >
              <Icon name="sign-in-alt" size={20} color="white" />
              <Text style={styles.buttonText}>Login</Text>
            </Button>
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate('Register')}
            >
              <Icon name="user-plus" size={20} color="white" />
              <Text style={styles.buttonText}>Register</Text>
            </Button>
          </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DefaultTheme.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
    textAlign: "center",
  },
  subheading: {
    fontSize: 20,
    marginBottom: 20,
    color: "#666666",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    margin: 10,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    marginLeft: 5,
  },
});

export default Welcome;
