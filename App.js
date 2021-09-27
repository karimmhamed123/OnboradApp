import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {View, Text} from 'react-native';
import Onboard from './components/Onboard';
import Home from './components/Home';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';



const App =  ()=>{
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold,
  });
  return(
    <Onboard/>
  );
};


export default App;


