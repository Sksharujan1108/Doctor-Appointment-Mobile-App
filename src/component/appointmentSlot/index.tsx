import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import dayjs from 'dayjs';
import Colors from '@/utlis/colors';
import {Calendar} from 'react-native-calendars';
import SectionHeader from '../sectionHeader';
import Chip from '../chip';

interface AppointmentSlotProps {
  onChangerHandler: (type: 'date' | 'time' | 'reminder', value: string) => void;
}


const timeSlots = Array.from({length: 8}, (_, i) => ({
  time: `${9 + i}:00 ${10 + i >= 12 ? 'PM' : 'AM'}`,
  value: `${9 + i}:00`,
}));

const reminderSlot = [
  {
    title: '10 min',
    value: '10',
  },
  {
    title: '15 min',
    value: '10',
  },
  {
    title: '30 min',
    value: '10',
  },
];

const AppointmentSlot = (props: AppointmentSlotProps) => {
  const { onChangerHandler } = props;

  const today = dayjs().format('YYYY-MM-DD'); //  Hide
  const maxDate = dayjs().add(15, 'day').format('YYYY-MM-DD');

  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedRemindTime, setselectedRemindTime] = useState(today);

  // Date
  const onChangeDate = useCallback((day: any) => {
    setSelectedDate(day?.dateString);
    onChangerHandler && onChangerHandler('date', day?.dateString)
  }, [onChangerHandler]);

  // Time
  const onChangeSlot = useCallback((index: any) => {
    setSelectedSlot(index);
    onChangerHandler && onChangerHandler('time', timeSlots[index].value)
  }, [onChangerHandler]);

  // Reminder
  const onChangeReminder = useCallback((index: any) => {
    setselectedRemindTime(index);
    onChangerHandler && onChangerHandler('reminder', reminderSlot[index].value)
  }, [onChangerHandler]);

  return (
    <View style={styles.container}>
      <Calendar
        minDate={today}
        maxDate={maxDate}
        onDayPress={onChangeDate}
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: Colors?.Primary,
          },
        }}
        theme={{
          todayTextColor: Colors?.secondary,
          selectedDayBackgroundColor: Colors?.Primary,
          arrowColor: Colors?.secondary,
          dayTextColor: Colors?.black,
          monthTextColor: Colors?.secondary,
          textMonthFontWeight: 'bold',
          textMonthFontSize: 18,
          textDayFontSize: 14,
          textDayHeaderFontSize: 14,
          // 👇 Add this to suppress the TypeScript error
          // @ts-ignore
          'stylesheet.calendar.header': {
            header: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
              height: 45,
              marginTop: 6,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              alignItems: 'center',
              backgroundColor: '#0047AB',
            },
            monthText: {
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
            },
          },
        }}
      />

      <View style={styles.timeSlotContainer}>
        <SectionHeader title="Available Time Slot" onPress={() => {}} />
        <FlatList
          data={timeSlots}
          horizontal
          contentContainerStyle={{padding: 15, gap: 8}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({item, index}) => (
            <Chip
              key={index}
              index={index}
              name={item?.time}
              descripition={item?.value}
              selected={selectedSlot}
              onChange={index => onChangeSlot(index)}
            />
          )}
        />
        <Text style={styles.reminderText}>Reminder Me Before</Text>
        <View style={styles.reminderSlotContainer}>
          {reminderSlot?.map((item, index) => (
            <Chip
              index={index}
              name={item?.title}
              descripition={item?.value}
              onChange={index => onChangeReminder(index)}
              selected={selectedRemindTime}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default AppointmentSlot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.secondary,
    padding: 15,
  },

  timeSlotContainer: {
    marginTop: 25,
  },

  reminderSlotContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    gap: 8,
  },
  reminderText: {
    fontSize: 16,
    fontWeight: '500',
    padding: 15,
    color: Colors?.black,
  },
});
