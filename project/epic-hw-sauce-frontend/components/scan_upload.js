import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "../styles.js";
import * as DocumentPicker from "react-native-document-picker";

function ScanUploadScreen() {
  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        result.uri,
        result.type, // mime type
        result.name,
        result.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        // Error!
        console.log(err);
      }
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
          onPress={handleFilePick}
        >
          <Icon name="file-upload" size={20} color="white" />
          <Text style={styles.buttonText}>Upload</Text>
        </Button>
      </View>
    </View>
  );
}
export default ScanUploadScreen;
