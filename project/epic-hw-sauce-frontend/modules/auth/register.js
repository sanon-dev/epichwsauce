import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import axios from "axios";
import LoadingOverlay from "../../components/loading_overlay";
import { styles } from "../../styles";

function Register({ onRegister, setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setIsLoading(true);
      const url = "http://127.0.0.1:8000/api/v1/profiles/";
      const response = await axios.post(url, {
        username: username,
        email: email,
        password: password,
      });
      const token = response.data.token;
      console.log(token);
      onRegister(username, token);
    } catch (error) {
      if (error.response && error.response.status) {
        console.log(`Error: ${error.response.status}`);
      } else {
        console.log(`Error: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.loginRegisterContainer}>
      <View style={styles.formContainer}>
        <LoadingOverlay visible={isLoading} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
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
          <Button
            title="Cancel"
            color="red"
            onPress={() => setView("welcome")}
          />
          <Button title="Register" onPress={handleRegister} color="#2196F3" />
        </View>
      </View>
    </View>
  );
}

export default Register;
