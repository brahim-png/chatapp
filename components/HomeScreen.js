import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Chat App!</Text>
      <Button
        title="Go to Chat"
        onPress={() => navigation.navigate('Chat')}
        color="#007BFF"
      />
      <Button
        title="Go to Group"
        onPress={() => navigation.navigate('Group')}
        color="#007BFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2E4A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});