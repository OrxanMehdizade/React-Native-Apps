import { NavigationContainer } from '@react-navigation/native';
import TabStack from './TabStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const isAuthenticated = true;

  const linking={
    prefixes: ['ReactNativeApps://'],
    config:{
      screens: {
        Homepage: 'homepage',
        DetailsPage:'details/:id'
        },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      {
        isAuthenticated ? <TabStack /> : <AuthStack />
      }

    </NavigationContainer>
  )
}

export default Navigation;
