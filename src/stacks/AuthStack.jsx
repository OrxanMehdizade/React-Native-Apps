import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from '../screens/login/login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={login}/>
    </Stack.Navigator>
  )
}

export default AuthStack
