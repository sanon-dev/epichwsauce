import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import App from "./App.js";

export default function Main() {
  return (
    // <PaperProvider>
      <App />
    // </PaperProvider>
  );
}
