import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/component/header'
import Colors from '@/utlis/colors'
import { AuthStackScreenProps } from '@/navigation/navigation-model/auth-model/authModel'
import CatergoriesList from '@/component/catergories'

const HomeScreen = ({navigation}: AuthStackScreenProps<'HomeScreen'>) => {
  return (
    <View style={styles.container}>
      <Header
        title='Sk Sarujan'
        onPress={() => {}}
        onPressSearch={() => navigation.navigate('SearchScreen')}
      />
      <CatergoriesList/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})