import { NavigationContainer } from '@react-navigation/native';
import MyStack from './screenNavigator/screenNavigator'

// axios.baseUrl = 'http://localhost:3002'

export default function App() {
  return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
  );
}