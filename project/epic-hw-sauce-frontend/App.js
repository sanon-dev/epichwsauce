import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./modules/auth/auth_stack";
import MainNav from "./modules/main/main_nav";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  const handleAuth = (username, token) => {
    setIsAuthenticated(true);
    setUsername(username);
    setToken(token);
  };

  const handleLogout = () => {
    setToken("");
    setUsername("");
    setIsAuthenticated(false);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isAuthenticated ? (
          <MainNav username={username} token={token} onLogout={handleLogout} />
        ) : (
          <AuthStack onAuth={handleAuth} />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
