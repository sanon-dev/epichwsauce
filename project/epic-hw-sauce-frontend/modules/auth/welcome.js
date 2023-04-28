import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, DefaultTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "../../styles.js";

const Welcome = ({ setView }) => {
  return (
    <View style={styles.centerContainer}>
      <Text style={styles.heading}>Welcome to EpicHWSauce</Text>
      <Text style={styles.subheading}>
        The best way to manage your homework
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => setView("login")}
        >
          <Icon name="sign-in-alt" size={20} color="white" />
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => setView("register")}
        >
          <Icon name="user-plus" size={20} color="white" />
          <Text style={styles.buttonText}>Register</Text>
        </Button>
      </View>
    </View>
  );
};

export default Welcome;
