import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { styles } from "../../styles.js";
import ScanDetails from "./scan_details.js";

const DATA = [
  {
    id: "1",
    title: "Scan 1",
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "Scan 2",
    response:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "Scan 3",
    response:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    thumbnail: "https://via.placeholder.com/150",
  },
];

function SavedScans(token) {
  const [view, setView] = useState("list");
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        setSelectedItem(item);
        setView("details");
        console.log(`Pressed item ${item.title}`);
      }}
    >
      <Avatar.Image source={{ uri: item.thumbnail }} size={64} />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemResponse}>{item.response}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Your scans will appear here.</Text>
    </View>
  );

  return (
    <View style={styles.savedScansContainer}>
      {view === "list" ? (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.listContainer}
          ListEmptyComponent={renderEmptyComponent} // Use ListEmptyCom
        />
      ) : (
        <ScanDetails item={selectedItem} onBack={() => setView("list")} />
      )}
    </View>
  );
}

export default SavedScans;
