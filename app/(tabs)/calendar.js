import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useRouter } from 'expo-router'; // Use the useRouter hook for navigation

export default function CalendarScreen() {
  const router = useRouter(); // Initialize the router

  const onDayPress = (day) => {
    // Navigate to daily-tracking page and pass the selected date as a query parameter
    router.push(`/daily-tracking?selectedDate=${day.dateString}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Tracking</Text>
      <Calendar
        onDayPress={onDayPress}
        markingType={'period'}
        markedDates={{
          '2024-11-04': { startingDay: true, color: 'green', endingDay: true },
          '2024-11-05': { startingDay: true, color: 'yellow', endingDay: true },
          '2024-11-06': { startingDay: true, color: 'red', endingDay: true },
          '2024-11-07': { startingDay: true, color: 'green', endingDay: true },
        }}
        style={styles.calendar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content to the top
    padding: 50,
    paddingTop: 120, // Add more top padding for spacing
    backgroundColor: '#faf8ed', // Light background
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E0E00',
    fontFamily: 'Futura',
    marginBottom: 70, // Space below the title
  },
  calendar: {
    width: 300, // Adjusted width to make the calendar smaller
    height: 330, // Adjusted height to make the calendar smaller
    marginBottom: 20,
    borderWidth: 3, // Added border width
    borderColor: 'orange', // Added border color
    borderRadius: 10, // Optional: Add rounded corners for the border
  },
});
