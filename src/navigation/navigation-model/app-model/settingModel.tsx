import { StackScreenProps } from '@react-navigation/stack';

export type SettingStackParamList = {
  SettingScreen: undefined;
};

export type SettingStackScreenProps<Screen extends keyof SettingStackParamList> = StackScreenProps<
  SettingStackParamList,
  Screen
>;
