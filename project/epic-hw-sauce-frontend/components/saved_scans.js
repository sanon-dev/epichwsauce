import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { styles } from '../styles.js';

const DATA = [
  {
    id: '1',
    title: 'Scan 1',
    response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'Scan 2',
    response: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'Scan 3',
    response: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    thumbnail: 'https://via.placeholder.com/150',
  },
];

function SavedScansScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => console.log(`Pressed item ${item.title}`)}>
      <Avatar.Image source={{ uri: item.thumbnail }} size={64} />
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemResponse}>{item.response}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.savedScansContainer}>
      {DATA.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your scans will appear here.</Text>
        </View>
      ) : (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.listContainer}
        />
      )}
    </View>
  );
}

export default SavedScansScreen;
