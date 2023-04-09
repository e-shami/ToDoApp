import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> To Do List </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 40,
  },
});