import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Home from "./home.js";
import Icon from 'react-native-vector-icons/FontAwesome5';
import ScanUpload from "./scan_upload.js";
import SavedScans from "./saved_scans.js";

function MainNav({username, token, onLogout}) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "scanUpload", title: "Scan & Upload", icon: "camera" },
    { key: "savedScans", title: "Saved Scans", icon: "bookmark" },
  ]);
  
  const renderIcon = ({route, color}) => (
    <Icon name={route.icon} size={24} color={color} />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "home":
        return <Home username={username} onLogout={onLogout}/>;
      case "scanUpload":
        return <ScanUpload token={token}/>;
      case "savedScans":
        return <SavedScans token={token}/>;
      default:
        return null;
    }
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={renderIcon}
      activeColor="#2196F3"
      inactiveColor="#999999"
      labelStyle={{ fontSize: 14 }}
    />
  );
}

export default MainNav
