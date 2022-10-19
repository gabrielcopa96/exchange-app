import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const Stack = createNativeStackNavigator();
import LginUser from '../screen/Login/LginUser';
import LoginPrueba from '../screen/LoginPrueba/LoginPrueba'
import Register from '../screen/RegisterPrueba/Register'
import Chat from '../screen/Chat/Chat'

const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            {/* <Stack.Screen
                name='LginUser'
                component={LginUser}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name="Login"
                component={LoginPrueba}
            />
            <Stack.Screen
                name="Register"
                component={Register}
            />
            <Stack.Screen
                name="Chat"
                component={Chat}
            />
        </Stack.Navigator>
    )
}

export default MyStack;