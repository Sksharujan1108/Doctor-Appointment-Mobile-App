/* eslint-disable react/no-unstable-nested-components */
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { symptomsList } from '@/utlis/constants';
import Colors from '@/utlis/colors';

interface CategoriesListProps {
    onChangeCatergory: (item: any) => void
}

const CategoriesList = (props: CategoriesListProps) => {
    const { onChangeCatergory } = props;
    const [selected, setSelected] = useState(0);

    const onPress = useCallback((index: any) => {
        setSelected(index);
        onChangeCatergory && onChangeCatergory(index);
    }, [onChangeCatergory]);

    const RendemItemList = ({ item, index }: any) => {
        return (
            <TouchableOpacity
              style={[
                styles.catergoryItem,
                index === selected && { backgroundColor: Colors?.Primary },
             ]}
              activeOpacity={0.6}
              onPress={() => {
                onPress(index);
              }}
            >
                <Text
                  style={[
                    styles.catergoryName,
                    index === selected && { color: Colors?.secondary },
                  ]}
                > {item?.name} </Text>
            </TouchableOpacity>
        );
    };
  return (
    <View>
      <FlatList
        data={symptomsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatListStyle}
        renderItem={({ item, index }) => (
            <RendemItemList
              item={item}
              index={index}
            />
        )}
        contentContainerStyle={{ gap: 10, padding: 15 }}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
    flatListStyle: {
        // padding: 15,
    },
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
