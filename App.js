// import { StyleSheet,View } from 'react-native';
import {NavigationContainer} from  '@react-navigation/native';
import MyStack from './screenNavigator/screenNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
  );
}