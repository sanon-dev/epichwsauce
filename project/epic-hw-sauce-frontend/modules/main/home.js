import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { styles } from '../../styles.js';

function Home( {username, onLogout} ) {
  return (
    <View style={styles.centerContainer}>
      <Text style={styles.heading}>Welcome, {username}!</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
}

export default Home;
