import {StyleSheet} from 'react-native';
import React from "react";
import Navigation from "./Navigation/Navigation";
import MainTab from "./Navigation/BottomTab";



export default function App() {
  return (
      <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

