import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingStackParamList } from '@/navigation/navigation-model/app-model/settingModel';
import SettingScreen from '@/screens/app/setting';

const Stack = createNativeStackNavigator<SettingStackParamList>();

const SettingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
