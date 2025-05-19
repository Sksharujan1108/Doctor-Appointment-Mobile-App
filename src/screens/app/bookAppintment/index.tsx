import {StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';
import React, { useState } from 'react';
import {fetchDoctorById} from '@/api/doctors';
import {useQuery} from '@tanstack/react-query';
import {AuthStackScreenProps} from '@/navigation/navigation-model/auth-model/authModel';
import HeaderBackBtn from '@/component/headerBackBtn';
import Colors from '@/utlis/colors';
import {images} from '@/utlis';
import TextInputField from '@/component/textInput';
import PrimaryButton from '@/component/primaryButton';

const BookAppointmentScreen = ({
  navigation,
  route,
}: AuthStackScreenProps<'BookAppointmentScreen'>) => {
  const {doctorId} = route.params;
  const {data} = useQuery({
    queryKey: ['doctorById', doctorId],
    queryFn: () => fetchDoctorById(doctorId),
  });
  console.log('doctorId', data);

  const [formData, setFormData] = useState({
    patientName : '',
    contactNumber: '',
    age: '',
  })

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBackBtn
        label="My Appointment"
        onPress={() => navigation.goBack()}
      />

      <View style={{padding: 15, marginTop: 15}}>
        {/* Doctor Card */}
        <Text style={styles.doctorHeadingText}>Book Appointment</Text>
        <View style={styles.doctorCardContainer}>
          <Image source={{uri: data?.image}} style={styles.doctorImage} />
          {/*  */}
          <View style={styles.commonContainer}>
            <Text style={styles.nameText}>{data?.name}</Text>
            {/*  */}
            <View style={{flexDirection: 'row', gap: 5}}>
              <Image source={images?.RatingStar} />
              <Text style={styles.nameText}>{data?.rating}</Text>
            </View>
            {/*  */}
            <Text style={styles.nameText}>Fee LKR {data?.fees}</Text>
          </View>
        </View>

        {/* Appointment For */}
        <Text style={styles.labelText}>
                    {'Appointment For'}
                </Text>
        {/* Patient Name */}
        <TextInputField
          label=""
          placeholder="Patient Name"
          value={formData?.patientName}
          onChangeText={(text) => {
            setFormData({
              ...formData,
              patientName: text,
            });
          }}
          keyboardType='default'
          maxLength={50}
        />
        {/* Contact Number */}
        <TextInputField
          label=""
          placeholder="Contact Number"
          value={formData?.contactNumber}
          onChangeText={(text) => {
            setFormData({
              ...formData,
              contactNumber: text,
            });
          }}
          keyboardType='numeric'
          maxLength={10}
        />
        {/* Age */}
        <TextInputField
          label=""
          placeholder="Age"
          value={formData?.age}
          onChangeText={(text) => {
            setFormData({
              ...formData,
              age: text,
            });
          }}
          keyboardType='numeric'
          maxLength={3}
        />
      </View>

      <View style = {styles?.buttonContainer}>
        <PrimaryButton
          label='Next'
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default BookAppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.secondary,
  },
  doctorHeadingText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
  doctorCardContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  commonContainer: {
    padding: 10,
    gap: 5,
  },
  nameText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },

  labelText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    marginTop: 20,
  },

  buttonContainer: {
    position: 'absolute',
    width: '100%',
    padding: 15,
    bottom: 20,
  }
});
