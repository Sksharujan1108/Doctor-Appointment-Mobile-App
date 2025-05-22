import React from 'react';
import BottomTab from '@/navigation/bottom-tab';
import { AppStackParamList } from '@/navigation/navigation-model/app-model/appModel';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './homeStack';
import ViewAllAppointmentStack from './viewAllAppointmentStack';
import ProfileStack from './profileStack';
import SettingStack from './settingStack';

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="ViewAllAppointmentStack" component={ViewAllAppointmentStack} />
      <Stack.Screen name="SettingStack" component={SettingStack} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
