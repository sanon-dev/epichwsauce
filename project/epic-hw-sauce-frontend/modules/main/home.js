import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function Home( {username, onLogout} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {username}!</Text>
      <Button title="Logout" onPress={onLogout} />
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Home;
