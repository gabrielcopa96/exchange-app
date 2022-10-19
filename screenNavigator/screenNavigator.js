import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const Stack = createNativeStackNavigator();
import LginUser from '../screen/LginUser';

const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='LginUser'
                component={LginUser}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default MyStack;