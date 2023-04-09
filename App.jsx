import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Header} from './Components/Header';
import {Body} from './Components/Body';
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'lightblue'} />
      <Header />
      <Body />
    </SafeAreaView>
  );
}