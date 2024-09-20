import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreenView from './SplashScreenView';
import { useEffect,useState } from 'react';
import OnboardingScreen from './OnboardingScreen';
import Calculator from './HomeScreen';

export default function App() {
  const [isShowSplash, setisShowSplash] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setisShowSplash(false);
    }, 3000); // 3000 ms = 3 seconds
  });


  return <>{isShowSplash ? <SplashScreenView/> : <Calculator/>}</> 
}
