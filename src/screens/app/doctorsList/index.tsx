import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DoctorsList from '@/component/doctorsList'
import Colors from '@/utlis/colors'
import { AuthStackScreenProps } from '@/navigation/navigation-model/auth-model/authModel'
import { images } from '@/utlis'

const DoctorListScreen = ({navigation}: AuthStackScreenProps<'DoctorListScreen'>) => {
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
      <DoctorsList
        onPress={(id) => navigation.navigate('DoctorDetailsScreen', {doctorId: id})}
      />
    </SafeAreaView>
  )
}

export default DoctorListScreen

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