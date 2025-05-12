import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Colors from '@/utlis/colors';
import {AuthStackScreenProps} from '@/navigation/navigation-model/auth-model/authModel';
import {useQuery} from '@tanstack/react-query';
import {fetchDoctorById} from '@/api/doctors';
import DoctorCard from '@/component/doctorCard';
import HeaderBackBtn from '@/component/headerBackBtn';
import {maetricesDoctor} from './constants';
import PrimaryButton from '@/component/primaryButton';

const DoctorDetailsScreen = ({
  navigation,
  route,
}: AuthStackScreenProps<'DoctorDetailsScreen'>) => {
  const {doctorId} = route.params;
  const {data} = useQuery({
    queryKey: ['doctorById', doctorId],
    queryFn: () => fetchDoctorById(doctorId),
  });
  console.log('doctorId', data);

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
        <PrimaryButton label="Book an Appointment" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default DoctorDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.secondary,
  },
  containerStyle: {
    width: '100%',
  },
  boxContainer: {
    // width: '48%',
    alignItems: 'center',
    backgroundColor: Colors?.secondary,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  iconImageContainer: {
    width: 42,
    height: 42,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#EDEDFC',
  },

  aboutMeText: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#000',
  },
  aboutMedescription: {
    paddingHorizontal: 15,
    letterSpacing: 0.3,
    lineHeight: 20,
  },
  footerBtn: {
    width: '100%',
    padding: 15,
    position: 'absolute',
    bottom: 20,
    backgroundColor: Colors?.secondary,
  },
});
