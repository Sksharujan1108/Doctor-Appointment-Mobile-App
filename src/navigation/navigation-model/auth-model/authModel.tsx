import { StackScreenProps } from '@react-navigation/stack';

export type AuthStackParamList = {
  OnBoardingScreen: undefined;
  LoginScreen: undefined;
  OtpVerificationScreen: {
    mobileNumber: string;
  };
  HomeScreen: undefined;
  SearchScreen: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = StackScreenProps<
  AuthStackParamList,
  Screen
>;