import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../screens/homepage/Homepage';
import DetailsPage from '../screens/detailsPage/DetailsPage';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Homepage' component={Homepage}/>
        <Stack.Screen options={{headerShown:false}} name='DetailsPage' component={DetailsPage}/>
    </Stack.Navigator>
  )
}

export default HomeStack
