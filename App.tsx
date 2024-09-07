import { StyleSheet} from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Navigation from './src/stacks/Navigation';

const App = () => {
  return (
    <SafeAreaProvider style={{flex:1}}>
        <SafeAreaView style={{flex:1}} edges={['right','top','left']}>
          <Navigation/>
        </SafeAreaView>
    </SafeAreaProvider>
    );
}

export default App

const styles = StyleSheet.create({})