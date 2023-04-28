import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNav from "./modules/auth/auth_nav";
import MainNav from "./modules/main/main_nav";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { DefaultTheme } from "react-native-paper";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("user");

  const handleAuth = (username, token) => {
    setIsAuthenticated(true);
    setUsername(username);
    setToken(token);
  };

  const handleLogout = () => {
    setToken("");
    setUsername("user");
    setIsAuthenticated(false);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isAuthenticated ? (
          <MainNav username={username} token={token} onLogout={handleLogout} />
        ) : (
          <SafeAreaView
            style={{ flex: 1, backgroundColor: DefaultTheme.colors.background }}
          >
            <AuthNav onAuth={handleAuth} />
          </SafeAreaView>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
