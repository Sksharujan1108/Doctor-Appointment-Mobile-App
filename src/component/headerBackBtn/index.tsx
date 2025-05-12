import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {images} from '@/utlis';

interface HeaderBackBtnProps {
  onPress: () => void;
  label: string;
}

const HeaderBackBtn = (props: HeaderBackBtnProps) => {
  const {onPress, label} = props;
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={{width: 20,}}>
        <Image source={images?.BackImage} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{label}</Text>
      <View style={{width: 20,}}></View>
    </View>
  );
};

export default HeaderBackBtn;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
    // backgroundColor: 'pink',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});
