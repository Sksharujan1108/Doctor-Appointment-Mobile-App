import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ViewAllAppointmentStackParamList } from '@/navigation/navigation-model/app-model/viewAllAppointmentModel';
import ViewAllAppointmentScreen from '@/screens/app/viewAllAppointment';
import AudioCallScreen from '@/screens/app/audioCall';

const Stack = createNativeStackNavigator<ViewAllAppointmentStackParamList>();

const ViewAllAppointmentStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ViewAllAppointmentScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ViewAllAppointmentScreen" component={ViewAllAppointmentScreen} />
      <Stack.Screen name="AudioCallScreen" component={AudioCallScreen} />
    </Stack.Navigator>
  );
};

export default ViewAllAppointmentStack;
