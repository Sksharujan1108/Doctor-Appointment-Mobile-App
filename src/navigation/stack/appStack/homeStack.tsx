import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/app/home';
import { HomeStackParamList } from '@/navigation/navigation-model/app-model/homeModel';
import SearchScreen from '@/screens/app/search';
import DoctorListScreen from '@/screens/app/doctorsList';
import DoctorDetailsScreen from '@/screens/app/doctorDetails';
import BookAppointmentScreen from '@/screens/app/bookAppintment';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="DoctorListScreen" component={DoctorListScreen} />
      <Stack.Screen name="DoctorDetailsScreen" component={DoctorDetailsScreen} />
      <Stack.Screen name="BookAppointmentScreen" component={BookAppointmentScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
