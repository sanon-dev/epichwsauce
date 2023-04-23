import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../styles.js';
function ScanUploadScreen() {
  return (
    <View style={[styles.container, styles.centerContainer, styles.scanUploadContainer]}>
      <Text style={styles.heading}>Scan & Upload</Text>
      <View style={styles.buttonContainer}>
        <Button mode="contained" color="#2196F3" style={styles.button} onPress={() => console.log('Pressed scan')}>
          <Icon name="camera" size={20} color="white" />
          <Text style={styles.buttonText}>Scan</Text>
        </Button>
        <Button mode="contained" color="#F44336" style={styles.button} onPress={() => console.log('Pressed upload')}>
          <Icon name="file-upload" size={20} color="white" />
          <Text style={styles.buttonText}>Upload</Text>
        </Button>
      </View>
    </View>
  );
}
export default ScanUploadScreen;