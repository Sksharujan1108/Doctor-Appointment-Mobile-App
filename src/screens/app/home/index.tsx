import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import Header from '@/component/header';
import CategoriesList from '@/component/catergories';
import SectionHeader from '@/component/sectionHeader';
import DoctorsList from '@/component/doctorsList';
import {useAppSelector} from '@/features/stateHooks';
import {selectGetSetAppointment} from '@/features/slices/confirmppointment';
import {useQuery} from '@tanstack/react-query';
import {fetchDoctorById} from '@/api/doctors';
import {images} from '@/utlis';
import dayjs from 'dayjs';
import {fetchspecialtiesData} from '@/api/specialitiesData';
import {styles} from './styles';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '@/navigation/navigation-model/bottomModels';

const HomeScreen = ({
  navigation,
  route,
}: BottomTabScreenProps<BottomTabParamList, 'HomeScreen'>) => {
  const {doctorId}: any = route.params ?? {};
  const GetAppointmentData = useAppSelector(selectGetSetAppointment);

  const {data} = useQuery({
    queryKey: ['doctorById', GetAppointmentData[0]?.doctor],
    queryFn: () => fetchDoctorById(doctorId),
  });

  const {data: specialtiesData} = useQuery({
    queryKey: ['specialties'],
    queryFn: fetchspecialtiesData,
  });

  const specialityObj = useMemo(() => {
    return specialtiesData?.find(item => item.id === data?.speciality);
  }, [specialtiesData, data]);

  const onPress = () => {
    navigation.navigate('HomeStack', {
      screen: 'DoctorListScreen',
    });
  };

  return (
    <View style={styles.container}>
      <Header
        title="Sk Sarujan"
        onPress={() => {}}
        onPressSearch={() =>
          navigation.navigate('HomeStack', {
            screen: 'SearchScreen',
          })
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
      <CategoriesList onChangeCatergory={() => {}} />
      {/*  */}
      {GetAppointmentData.length > 0 && (
        <View>
          <SectionHeader title="Appointments"
            onPress={() => {
              navigation.navigate('ViewAllAppointmentStack', {
                screen: 'ViewAllAppointmentScreen',
              });
            }}
          />
          <TouchableOpacity
            style={styles.appointmentCardContainer}
            onPress={() => {
              console.log(
                'GetAppointmentData[0].id',
                GetAppointmentData[0]?.id,
              );

              navigation.navigate('ViewAllAppointmentStack', {
                screen: 'ViewAllAppointmentScreen',
                params: {
                  appointmentId: GetAppointmentData[0]?.id,
                },
              });
            }}
            activeOpacity={0.5}>
            <View style={styles.appointmentCard}>
              <Image
                style={styles.doctorImage}
                // source={{ uri: data?.image }}
                source={{
                  uri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9waG90b2dyYXBoeV9vZl9hbl9zb3V0aF9pbmRpYW5fd29tZW5fYXNfYV9kb2N0b19kMzAxMDM3Zi03MDUzLTQxNDAtYmYyZS1lZDFlYWE0YTM3NDRfMS5qcGc.jpg',
                }}
              />
              <View style={styles.doctorInfo}>
                <Text style={styles.cardText}>{data?.name}</Text>
                <Text style={styles.cardText}>{specialityObj?.title}</Text>
              </View>
            </View>
            {/*  */}
            <View style={styles.appointmentDetailsWrapper}>
              <View style={styles.dateTimeContainer}>
                <Image source={images?.Calendar} />
                <Text style={styles.dateTimeText}>
                  {dayjs(GetAppointmentData[0]?.slot?.date).format('DD MMM')}
                </Text>
              </View>
              {/*  */}
              <View style={styles.dateTimeContainer}>
                <Image source={images?.Clock} />
                <Text style={styles.dateTimeText}>
                  <Text style={styles.dateTimeText}>
                    {GetAppointmentData[0]?.slot?.time?.split(':')[0] > 12
                      ? GetAppointmentData[0]?.slot?.time + 'PM'
                      : GetAppointmentData[0]?.slot?.time + 'AM'}
                  </Text>
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {/*  */}
      <SectionHeader title="Top Doctors" onPress={onPress} />
      <DoctorsList
        onPress={id =>
          navigation.navigate('HomeStack', {
            screen: 'DoctorDetailsScreen',
            params: {
              doctorId: id,
            },
          })
        }
      />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
