import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from './homeModel';
import { ViewAllAppointmentStackParamList } from './viewAllAppointmentModel';
import { SettingStackParamList } from './settingModel';
import { ProfileStackParamList } from './profileModel';

export type AppStackParamList = {
  BottomTab: undefined;

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

export type AppStackScreenProps<Screen extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, Screen>;
