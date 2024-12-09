import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DailyTracking() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Daily Tracking</Text>
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.yAxisLabel}>Vitamin Level (IU)</Text>
        <View style={styles.chartBackground}>
          {/* Placeholder for graph content */}
        </View>
        <Text style={styles.xAxisLabel}>Time (hr)</Text>
      </View>
      <View style={styles.statisticsContainer}>
        <Text style={styles.statText}>Daily Median:</Text>
        <Text style={styles.statText}>Daily High:</Text>
        <Text style={styles.statText}>Daily Low:</Text>
        <Text style={styles.statText}>Level at selected time:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8ED',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 120, // Increased margin to move content down
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E0E00',
    fontFamily: 'Futura',
  },
  chartContainer: {
    position: 'absolute',
    top: 200, // Moved graph further down
    left: 60,
    width: 270,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yAxisLabel: {
    position: 'absolute',
    transform: [{ rotate: '270deg' }], // Adjusted to rotate 90 degrees to the left
    left: -100,
    top: 110,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Futura',
    color: 'rgba(0, 0, 0, 0.50)',
  },
  xAxisLabel: {
    position: 'absolute',
    bottom: -35,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Futura',
    color: 'rgba(0, 0, 0, 0.50)',
  },
  chartBackground: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'linear-gradient(180deg, #FFAA00 0%, white 100%)',
  },
  statisticsContainer: {
    position: 'absolute',
    top: 525, // Adjusted position to move statistics section down
    left: 40,
  },
  statText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Gotham',
    color: '#1E0E00',
    marginVertical: 10,
  },
});
