import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import Header from '@/component/header'
import Colors from '@/utlis/colors'
import { AuthStackScreenProps } from '@/navigation/navigation-model/auth-model/authModel'
import CatergoriesList from '@/component/catergories'
import SectionHeader from '@/component/sectionHeader'
import DoctorsList from '@/component/doctorsList'

const HomeScreen = ({navigation}: AuthStackScreenProps<'HomeScreen'>) => {

  const onPress = (() => {
    navigation.navigate('DoctorListScreen')
  });

  return (
    <View style={styles.container}>
      <Header
        title='Sk Sarujan'
        onPress={() => {}}
        onPressSearch={() => navigation.navigate('SearchScreen')}
      />
      <CatergoriesList
        onChangeCatergory={() => {}}
      />
      <SectionHeader
        title='Top Doctors'
        onPress={onPress}
      />
      <DoctorsList
        onPress={(id) => navigation.navigate('DoctorDetailsScreen', {doctorId: id})}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.secondary
  },
})