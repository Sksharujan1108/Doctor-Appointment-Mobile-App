import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/utlis/colors'

interface SectionHeaderProps {
  title: string
  onPress: () => void
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { title, onPress } = props
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.6}
      >
        <Text style={styles.textButton}>See all</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  textButton: {
    fontSize: 16,
    fontWeight: '300',
    color: Colors.Primary,
  },
})