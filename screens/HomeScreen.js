import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Chatbot from '../components/Chatbot';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recipe AI Chatbot</Text>
      <Chatbot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
});
