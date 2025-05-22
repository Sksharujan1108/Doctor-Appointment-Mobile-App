/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../stack/appStack/homeStack';
import {BottomTabParamList} from '../navigation-model/bottomModels';
import {images} from '@/utlis';
import Colors from '@/utlis/colors';
import ProfileStack from '../stack/appStack/profileStack';
import SettingStack from '../stack/appStack/settingStack';
import ViewAllAppointmentStack from '../stack/appStack/viewAllAppointmentStack';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'HomeStack') {
            return (
              <Image
                style={styles.imageStyle}
                source={focused ? images?.HomeFilled : images?.HomeEmpty}
              />
            );
          } else if (route.name === 'ViewAllAppointmentStack') {
            return (
              <Image
                style={styles.imageStyle}
                source={
                  focused ? images?.AppointmentFilled : images?.AppointmentEmpty
                }
              />
            );
          } else if (route.name === 'SettingStack') {
            return (
              <Image
                style={styles.imageStyle}
                source={focused ? images?.SettingFilled : images?.SettingEmpty}
              />
            );
          } else if (route.name === 'ProfileStack') {
            return (
              <Image
                style={styles.imageStyle}
                source={focused ? images?.ProfileFilled : images?.ProfileEmpty}
              />
            );
          }
        },
        tabBarLabel: () => {
          return null;
        },
        headerStyle: {
          backgroundColor: '#0B3DA9',
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerTintColor: Colors?.secondary,
        headerTitleStyle: {},
        headerBackTitleVisible: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarIconStyle: {
          marginTop: 8,
        },
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ViewAllAppointmentStack"
        component={ViewAllAppointmentStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBarItemStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    height: 70,
  },
  imageStyle: {
    width: 32,
    height: 32,
  },
});
