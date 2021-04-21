import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GenerateSkill from './components/GenerateSkill';
import Resources from './components/Resources';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 60}}>
        <Text style={{fontSize: 35, color: '#001F3D'}}>Coping Skills Generator</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B6CBE1',
    alignItems: 'center',
  },
});
