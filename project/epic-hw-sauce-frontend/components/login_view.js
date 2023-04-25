import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import axios from "axios";
import LoadingOverlay from "./loading_overlay";
import { DefaultTheme } from 'react-native-paper';

function LoginView({ onBackPress, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const url = "http://127.0.0.1:8000/api/v1/auth/token/login/";
      const response = await axios.post(url, {
        email: email,
        password: password,
      });
      const token = response.data.auth_token;
      // save the token in local storage or state management library
      console.log(token);
      onLogin(email);
    } catch (error) {
      if (error.response && error.response.status) {
        console.log(`Error: ${error.response.status}`);
      } else {
        console.log(`Error: ${error.message}`);
      }
      onBackPress();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.formContainer}>
      <LoadingOverlay visible={isLoading} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={onBackPress} color="#FF7043" />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: DefaultTheme.colors.background,
    width: "100%",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#C4C4C4",
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});

export default LoginView;
