/* eslint-disable @typescript-eslint/no-shadow */
import {StyleSheet, SafeAreaView, Text, View, Image, Alert} from 'react-native';
import React, {useCallback, useState} from 'react';
import {fetchDoctorById} from '@/api/doctors';
import {useMutation, useQuery} from '@tanstack/react-query';
import HeaderBackBtn from '@/component/headerBackBtn';
import Colors from '@/utlis/colors';
import {images} from '@/utlis';
import TextInputField from '@/component/textInput';
import PrimaryButton from '@/component/primaryButton';
import AppointmentSlot from '@/component/appointmentSlot';
import { usePreventRemove} from '@react-navigation/native';
import ConformationModal from '@/component/conformationModal';
import { useAppDispatch } from '@/features/stateHooks';
import { createAppintment } from '@/api/appointment';
import { setAppointment } from '@/features/slices/confirmppointment';
import { HomeStackScreenProps } from '@/navigation/navigation-model/app-model/homeModel';

type FormField = 'patientName' | 'contactNumber' | 'age';

const BookAppointmentScreen = ({ navigation, route }: HomeStackScreenProps<'BookAppointmentScreen'>) => {
  const {doctorId} = route.params ?? {};

  const dispatch = useAppDispatch();

  const [isPatientDetails, setIsPatientDetails] = useState(false);

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedRemindTime, setselectedRemindTime] = useState(0);

  const [displayModal, setDisplayModal] = useState(false);

  const {data, isError, error} = useQuery({
    queryKey: ['doctorById', doctorId],
    queryFn: () => fetchDoctorById(doctorId),
  });
  console.log('doctorId', data);

  const [formData, setFormData] = useState({
    patient: {
      patientName: '',
      contactNumber: '',
      age: '',
    },
    slot: {
      'time': '',
      'date': '',
      'reminder': '',
    },
    doctor: doctorId,
    error: {
      patientNameError: '',
      contactNumberError: '',
      ageError: '',
    },
  });

  const mutation = useMutation({
    mutationFn: createAppintment,
    onSuccess: (data) => {
      console.log('Recived', data);
      dispatch(setAppointment(data));
      setDisplayModal(true);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  usePreventRemove(isPatientDetails, ({data}) => {
    if (isPatientDetails) {
      setIsPatientDetails(false);
    } else {
      navigation?.dispatch(data?.action);
    }
  });

  // on Change Text ----
  const onChangeTextField = useCallback((name: FormField, value: any) => {
    setFormData(prev => ({
      ...prev,
      patient: {
        ...prev.patient,
        [name]: value,
      },
    }));
  }, []);

  // on Press Next -----
  const onPressNext = useCallback(() => {
    console.log('formData', formData);

    const {patientName, contactNumber, age} = formData?.patient;

    if (isPatientDetails) {
      mutation.mutate(formData);
    } else {
      if (patientName.trim() === '') {
        Alert.alert('Patient Name is required');
      } else if (contactNumber?.trim() === '') {
        Alert.alert('Contact Number is required');
      } else if (age?.trim() === '') {
        Alert.alert('Age is required');
      } else {
        setIsPatientDetails(true);
      }
    }
  }, [formData, isPatientDetails, mutation]);

  const onChangerHandler = useCallback((name: any, value: any) => {
    console.log('change', name, value);

    setFormData(prev => ({
      ...prev,
      slot: {
        ...prev.slot,
        [name]: value,
      },
    }));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBackBtn
        label="My Appointment"
        onPress={() => navigation.goBack()}
      />

      {!isPatientDetails && (
        <View style={{ padding: 15, marginTop: 15 }}>
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
          <Text style={styles.labelText}>{'Appointment For'}</Text>
          {/* Patient Name */}
          <TextInputField
            placeholder="Patient Name"
            value={formData?.patient?.patientName}
            onChangeText={text => onChangeTextField('patientName', text)}
            keyboardType="default"
            maxLength={50}
            error={formData?.error?.patientNameError}
            onBlur={() => {
              if (formData?.patient?.patientName === '') {
                setFormData(prev => ({
                  ...prev,
                  error: {
                    ...prev.error,
                    patientNameError: 'PatientName is required',
                  },
                }));
              } else {
                setFormData(prev => ({
                  ...prev,
                  error: {
                    ...prev.error,
                    patientNameError: '',
                  },
                }));
              }
            }}
          />
          {/* Contact Number */}
          <TextInputField
            placeholder="Contact Number"
            value={formData?.patient?.contactNumber}
            onChangeText={text => onChangeTextField('contactNumber', text)}
            keyboardType="numeric"
            maxLength={10}
            error={formData?.error?.contactNumberError}
            onBlur={() => {
              if (formData?.patient?.contactNumber === '') {
                setFormData(prev => ({
                  ...prev,
                  error: {
                    ...prev.error,
                    contactNumberError: 'Contact Number is required',
                  },
                }));
              } else {
                setFormData(prev => ({
                  ...prev,
                  error: {
                    ...prev.error,
                    contactNumberError: '',
                  },
                }));
              }
            }}
          />
          {/* Age */}
          <TextInputField
            placeholder="Age"
            value={formData?.patient?.age}
            onChangeText={text => onChangeTextField('age', text)}
            keyboardType="numeric"
            maxLength={3}
            error={formData?.error?.ageError}
            onBlur={() => {
              if (formData?.patient?.age === '') {
                setFormData(prev => ({
                  ...prev,
                  error: {
                    ...prev.error,
                    ageError: 'Age is required',
                  },
                }));
              } else {
                setFormData(prev => ({
                  ...prev,
                  error: {
                    ...prev.error,
                    ageError: '',
                  },
                }));
              }
            }}
          />
        </View>
      )}

      {isPatientDetails &&
        (
         <AppointmentSlot
           onChangerHandler={onChangerHandler}
         />
        )
      }

      <View style={styles?.buttonContainer}>
        <PrimaryButton
          label={isPatientDetails ? 'Set Appointment' : 'Next'}
          onPress={onPressNext}
        />
      </View>

      {/*  */}
      <ConformationModal
        visible={displayModal}
        onClose={() => {
          setDisplayModal(false);
        }}
        onPressDone={() => {
          setDisplayModal(false);
          navigation.navigate('HomeScreen');
        }}
        doctorName={data?.name}
        date={formData?.slot?.date}
        time={formData?.slot?.time}
      />
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
  },
});
