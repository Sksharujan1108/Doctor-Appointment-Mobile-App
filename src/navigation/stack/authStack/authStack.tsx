import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/navigation-model/auth-model/authModel';
import OnBoardingScreen from '@/screens/auth/onboarding';
import LoginScreen from '@/screens/auth/login';
import OtpVerificationScreen from '@/screens/auth/otpVerification';
import HomeScreen from '@/screens/app/home';
import SearchScreen from '@/screens/app/search';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='OnBoardingScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='OnBoardingScreen' component={OnBoardingScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='OtpVerificationScreen' component={OtpVerificationScreen} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;