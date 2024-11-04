import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day: { dateString: React.SetStateAction<string>; }) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markingType={'period'}
        markedDates={{
          '2024-11-04': {startingDay: true, color: 'green', endingDay: true},
          '2024-11-05': {startingDay: true, color: 'yellow', endingDay: true},
          '2024-11-06': {startingDay: true, color: 'red', endingDay: true},
          '2024-11-07': {startingDay: true, color: 'green', endingDay: true},

        }}
        style={styles.calendar}
      />
      {selectedDate ? (
        <Text style={styles.selectedDate}>
          Selected Date: {selectedDate}
        </Text>
      ) : (
        <Text style={styles.instruction}>Tap on a date to select it.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e6f0f8', // Light blue background
    width: '100%'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  calendar: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  selectedDate: {
    fontSize: 18,
    marginTop: 10,
  },
  instruction: {
    fontSize: 16,
    color: 'gray',
  },
});
