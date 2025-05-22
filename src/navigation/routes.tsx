import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomTab from './bottom-tab';

const Routes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
