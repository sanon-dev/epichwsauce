import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "../../styles.js";
import * as DocumentPicker from "expo-document-picker";

function ScanUpload(token) {
  const [fileUri, setFileUri] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (result.type === 'success') {
        console.log(
          result.uri,
          result.type, // mime type
          result.name,
          result.size
        );
        setFileUri(result.uri);
      } else {
        console.log('Document selection cancelled');
      }
    } catch (err) {
      console.log('Document selection error:', err);
    }
  };
  return (
    <View
      style={[
        styles.container,
        styles.centerContainer,
        styles.scanUploadContainer,
      ]}
    >
      <Text style={styles.heading}>Scan & Upload</Text>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          color="#2196F3"
          style={styles.button}
          onPress={() => console.log("Pressed scan")}
        >
          <Icon name="camera" size={20} color="white" />
          <Text style={styles.buttonText}>Scan</Text>
        </Button>
        <Button
          mode="contained"
          color="#F44336"
          style={styles.button}
          onPress={pickDocument}
        >
          <Icon name="file-upload" size={20} color="white" />
          <Text style={styles.buttonText}>Upload</Text>
        </Button>
      </View>
    </View>
  );
}
export default ScanUpload;
