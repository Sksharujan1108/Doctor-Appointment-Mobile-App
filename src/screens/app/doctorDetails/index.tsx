import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/utlis/colors';
import { images } from '@/utlis';
import { AuthStackScreenProps } from '@/navigation/navigation-model/auth-model/authModel';
import { useQuery } from '@tanstack/react-query';
import { fetchDoctorById } from '@/api/doctors';

const DoctorDetailsScreen = ({navigation, route}: AuthStackScreenProps<'DoctorDetailsScreen'>) => {
    const { doctorId } = route.params;
    const { data } = useQuery({
        queryKey: ['doctorById'],
        queryFn: fetchDoctorById
    })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
              >
                  <Image
                    source={images?.BackImage}
                  />
              </TouchableOpacity>
            </View>
    </SafeAreaView>
  )
}

export default DoctorDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors?.secondary
    },
    headerContainer: {
        flexDirection: 'row',
        height: 20,
        paddingHorizontal: 15,
        // backgroundColor: 'pink'
    }
})