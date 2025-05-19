import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import Colors from '@/utlis/colors';

interface ChipProps {
  name: string;
  index: any;
  onChange: (item: any) => void;
  descripition: any;
  selected: any;
}

const Chip = (props: ChipProps) => {
  const {name, index, descripition, onChange, selected} = props;

  const onPress = useCallback(
    (index: any) => {
      onChange && onChange(index);
    },
    [index],
  );

  return (
    <TouchableOpacity
      style={[
        styles.catergoryItem,
        index === selected && {backgroundColor: Colors?.Primary},
      ]}
      activeOpacity={0.6}
      onPress={() => {
        onPress(index);
      }}>
      <Text
        style={[
          styles.catergoryName,
          index === selected && {color: Colors?.secondary},
        ]}>
        {' '}
        {name}{' '}
      </Text>
    </TouchableOpacity>
  );
};

export default Chip;

const styles = StyleSheet.create({
  catergoryItem: {
    backgroundColor: '#E9E9FE',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  catergoryName: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
});
