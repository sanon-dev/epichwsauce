import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles.js";

function ScanDetails({ item, onBack }) {
  return (
    <View style={styles.scanDetailsContainer}>
      <Text style={styles.scanDetailsTitle}>{item.title}</Text>
      <Text style={styles.scanDetailsResponse}>{item.response}</Text>
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ScanDetails;