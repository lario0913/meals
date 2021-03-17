import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.firstChild}>
        <Text>Search</Text>
      </View>
      <View style={styles.secondChild}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
    <StatusBar style="auto" />
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "darkblue",
    paddingTop: 40,
    flex: 1,
  },
  firstChild: {
    // height: 40,
    padding: 16,
    backgroundColor: "blue",
  },
  secondChild: {
    flex: 1,
    padding: 16,
    backgroundColor: "green",
  }
});
