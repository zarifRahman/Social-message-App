import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const MessagesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Messages Screen</Text>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
