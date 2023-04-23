import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to EpicHWSauce</Text>
      <Text style={styles.subheading}>The best way to manage your homework</Text>
      <View style={styles.buttonContainer}>
        <Button mode="contained" color="#2196F3" style={styles.button} onPress={() => console.log('Pressed login')}>
          <Icon name="sign-in-alt" size={20} color="white" />
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <Button mode="contained" color="#F44336" style={styles.button} onPress={() => console.log('Pressed register')}>
          <Icon name="user-plus" size={20} color="white" />
          <Text style={styles.buttonText}>Register</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 20,
    marginBottom: 20,
    color: '#666666',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
});

export default HomeScreen;
