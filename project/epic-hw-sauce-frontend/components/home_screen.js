import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import LoginView from "./login_view.js";
import RegisterView from "./register_view.js";
import UserInfoView from "./user_info_view.js";

function HomeScreen() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLoginButtonPress = () => {
    setShowLogin(true);
  };

  const handleRegisterButtonPress = () => {
    setShowRegister(true);
  };

  const handleLogin = async (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const handleRegister = async (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const handleBackButtonPress = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <View style={styles.container}>
      {showLogin ? (
        <LoginView onBackPress={handleBackButtonPress} onLogin={handleLogin} />
      ) : showRegister ? (
        <RegisterView
          onBackPress={handleBackButtonPress}
          onRegister={handleRegister}
        />
      ) : isLoggedIn ? (
        <UserInfoView username={username} onLogout={handleLogout} />
      ) : (
        <>
          <Text style={styles.heading}>Welcome to EpicHWSauce</Text>
          <Text style={styles.subheading}>
            The best way to manage your homework
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              color="#2196F3"
              style={styles.button}
              onPress={handleLoginButtonPress}
            >
              <Icon name="sign-in-alt" size={20} color="white" />
              <Text style={styles.buttonText}>Login</Text>
            </Button>
            <Button
              mode="contained"
              color="#F44336"
              style={styles.button}
              onPress={handleRegisterButtonPress}
            >
              <Icon name="user-plus" size={20} color="white" />
              <Text style={styles.buttonText}>Register</Text>
            </Button>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
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

export default HomeScreen;
