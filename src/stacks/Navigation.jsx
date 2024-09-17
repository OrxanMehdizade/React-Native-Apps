import { NavigationContainer } from '@react-navigation/native';
import TabStack from './TabStack';
import AuthStack from './AuthStack';
import { useMMKVString } from 'react-native-mmkv';

const Navigation = () => {
  const [isAuthenticated,setIsAuthenticated]=useMMKVString('accessToken');
  


  const linking = {
    prefixes: ['reactNativeApps://'],
    config: {
      screens: {
        Home: {
          path: 'home/',
          screens: {
            Homepage: {
              path: 'homepage/',
            },
            DetailsPage: {
              path: 'details/:id',
            },
          },
        },

        Profile: {
          path: 'profile/',
          screens: {
            Profile: {
              path: 'index/',
            },
          },
        },
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
