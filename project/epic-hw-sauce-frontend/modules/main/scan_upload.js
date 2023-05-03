import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "../../styles.js";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";
import { API_URL } from "../../constants";

function ScanUpload({ token, onSaveScan }) {
  const [fileUri, setFileUri] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (result.type === "success") {
        console.log(
          result.uri,
          result.type, // mime type
          result.name,
          result.size
        );
        setFileUri(result.uri);
      } else {
        console.log("Document selection cancelled");
      }
    } catch (err) {
      console.log("Document selection error:", err);
    }
  };

  const handleUpload = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', {
        uri: fileUri,
        type: 'text/plain', // set the MIME type here for text files
        name: 'file.txt' // replace with actual file name
      });
  
      const response = await axios.post(
        'https://127.0.0.1:8000/api/v1/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log('Upload response:', response.data);
      setFileUri(null);
      setLoading(false);
      setView('details');
      setSelectedItem({
        id: response.data.id,
        title: response.data.title,
        response: response.data.analysis_result,
        thumbnail: 'https://via.placeholder.com/150'
      });
    } catch (err) {
      console.log('Upload error:', err);
      setLoading(false);
      setError(err.message || 'An error occurred');
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
          style={styles.button}
          onPress={() => console.log("Pressed scan")}
        >
          <Icon name="camera" size={20} color="white" />
          <Text style={styles.buttonText}>Scan</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={pickDocument}
        >
          <Icon name="file-upload" size={20} color="white" />
          <Text style={styles.buttonText}>Upload</Text>
        </Button>
      </View>
      {fileUri && (
        <View>
          <Text style={styles.fileUriText}>Selected file: {fileUri}</Text>
          <Button mode="contained" style={styles.uploadButton} onPress={handleUpload}>
            Upload
          </Button>
        </View>
      )}
    </View>
  );
}

export default ScanUpload;
