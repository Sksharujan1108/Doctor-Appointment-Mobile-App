import { StackScreenProps } from '@react-navigation/stack';

export type HomeStackParamList = {
  HomeScreen: undefined
  SearchScreen: undefined;
  DoctorListScreen: undefined;
  DoctorDetailsScreen: {
    doctorId: any;
  };
  BookAppointmentScreen: {
    doctorId: any;
  }
};

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> = StackScreenProps<
  HomeStackParamList,
  Screen
>
