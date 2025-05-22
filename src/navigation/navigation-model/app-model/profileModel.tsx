import { StackScreenProps } from '@react-navigation/stack';

export type ProfileStackParamList = {
  ProfileScreen: undefined;
};

export type ProfileStackScreenProps<Screen extends keyof ProfileStackParamList> = StackScreenProps<
  ProfileStackParamList,
  Screen
>;
