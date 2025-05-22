import { StackScreenProps } from '@react-navigation/stack';

export type ViewAllAppointmentStackParamList = {
  ViewAllAppointmentScreen: {
    appointmentId: any;
  };
  AudioCallScreen: undefined;
};

export type ViewAllAppointmentStackScreenProps<Screen extends keyof ViewAllAppointmentStackParamList> = StackScreenProps<
  ViewAllAppointmentStackParamList,
  Screen
>;
