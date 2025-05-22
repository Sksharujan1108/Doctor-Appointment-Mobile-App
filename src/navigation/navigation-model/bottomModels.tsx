import {HomeStackParamList} from './app-model/homeModel';
import {ProfileStackParamList} from './app-model/profileModel';
import {SettingStackParamList} from './app-model/settingModel';
import {ViewAllAppointmentStackParamList} from './app-model/viewAllAppointmentModel';

export type BottomTabParamList = {
  HomeScreen: undefined;
  ViewAllAppointmentScreen: {
    appointmentId: any;
  };
  SettingScreen: undefined;
  ProfileScreen: undefined;


  HomeStack: {
    screen: keyof HomeStackParamList;
    params?: HomeStackParamList[keyof HomeStackParamList];
  };
  ViewAllAppointmentStack: {
    screen: keyof ViewAllAppointmentStackParamList;
    params?: ViewAllAppointmentStackParamList[keyof ViewAllAppointmentStackParamList];
  };
  SettingStack: {
    screen: keyof SettingStackParamList;
    params?: SettingStackParamList[keyof SettingStackParamList];
  };
  ProfileStack: {
    screen: keyof ProfileStackParamList;
    params?: ProfileStackParamList[keyof ProfileStackParamList];
  };
};
