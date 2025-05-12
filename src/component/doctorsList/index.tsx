import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchDoctors } from '@/api/doctors';
import DoctorCard from '../doctorCard';
import Colors from '@/utlis/colors';

interface DoctorsListProps {
  horizontal: any
  onPress: (id: any) => void
}

const DoctorsList = (props: DoctorsListProps) => {
  const { horizontal, onPress } = props;

    const { isLoading, data, error } = useQuery<any>({
        queryKey: ['doctors'],
        queryFn: fetchDoctors
    });
    console.log('data', data);

    const onPressClick = (id: string) => {
       onPress && onPress(id);
    };
    
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={horizontal}
        // numColumns={numColumns}
        numColumns={!horizontal && 2}
        columnWrapperStyle={!horizontal && { justifyContent: 'space-between', flex: 1 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => (
            <DoctorCard
              key={item?.id}
              getData={item}
              horizontal={horizontal}
              onPress={(id) => onPressClick(id)}
            />
        )}
        contentContainerStyle={{ gap:18, padding: 15 }}
      />
    </View>
  )
}

export default DoctorsList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: Colors?.secondary
    },
})

