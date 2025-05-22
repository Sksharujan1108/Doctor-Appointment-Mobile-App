/* eslint-disable react-native/no-inline-styles */

import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {selectGetSetAppointment} from '@/features/slices/confirmppointment';
import {useAppSelector} from '@/features/stateHooks';
import {useQuery} from '@tanstack/react-query';
import {fetchDoctorById} from '@/api/doctors';
import PrimaryButton from '@/component/primaryButton';
import { maetricesDoctor } from '../doctorDetails/constants';
import DoctorCard from '@/component/doctorCard';
import { styles } from './styles';
import HeaderBackBtn from '@/component/headerBackBtn';
import { images } from '@/utlis';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '@/navigation/navigation-model/bottomModels';

const ViewAllAppointmentScreen = ({
  navigation,
  route,
}: BottomTabScreenProps<BottomTabParamList, 'ViewAllAppointmentScreen'>) => {
  const { appointmentId } = route.params ?? {};
  console.log('appointmentId', appointmentId);

  const GetAppointmentData = useAppSelector(selectGetSetAppointment);
  console.log('appointment', GetAppointmentData);

  const appointment = useMemo(
    () => GetAppointmentData.find(item => item.id === appointmentId),
    [GetAppointmentData, appointmentId],
  );

  console.log('appointment------', appointment);

  const {data} = useQuery({
    queryKey: ['doctorById', appointment?.doctor],
    queryFn: () => fetchDoctorById(doctorId),
  });

  return (
    <SafeAreaView style={styles.container}>

      <HeaderBackBtn
        label="My Appointment"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 10}}>
        <View style={{padding: 15, marginTop: 15}}>
          <DoctorCard
            containerStyle={styles.containerStyle}
            imageStyleProps={{height: 300}}
            getData={data}
            displayAll
            disable
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          {maetricesDoctor?.map((item, index) => (
            <View key={index} style={styles.boxContainer}>
              <View style={styles.iconImageContainer}>
                <Image source={item?.icon} />
              </View>
              <Text style={{paddingTop: 5}}>{item?.label}</Text>
              <Text style={{paddingTop: 5}}>{item?.title}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.aboutMeText}>{'About Me'}</Text>
        <Text style={styles.aboutMedescription}>
          {
            'Dr. Carly Angel is the top most immunologist specialist in Crist Hospital in London, Uk Read More....'
          }
        </Text>
      </ScrollView>

      <View style={styles.footerBtn}>
        <PrimaryButton
          child={
            <Image
              source={images.Clock}
              style={{ width: 24, height: 24 }}
            />
          }
          label={
            `Voice Call (${appointment?.slot?.time?.split(':')[0] > 12
                ? appointment?.slot?.time + 'PM'
                : appointment?.slot?.time + 'AM'
              })`
          }
          onPress={() => {
            // navigation.navigate('AudioCallScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewAllAppointmentScreen;
