import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Overlay } from "react-native-elements";

const LoadingOverlay = ({ isVisible }) => {
  if (!isVisible) return null;
  return (
    <Overlay isVisible={isVisible} overlayStyle={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
});

export default LoadingOverlay;
