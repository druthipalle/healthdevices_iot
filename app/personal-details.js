import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function PersonalDetails() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#ffaa00" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Personal Details</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Row 1: Skin Type */}
        <View style={styles.row}>
          <Ionicons name="person-circle-outline" size={20} color="#ffaa00" style={styles.icon} />
          <Text style={styles.label}>Skin Type</Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>Oily Skin</Text>
            <Ionicons name="chevron-down" size={20} color="#1e0e00" />
          </View>
        </View>

        {/* Row 2: Age */}
        <View style={styles.row}>
          <Ionicons name="calendar-outline" size={20} color="#ffaa00" style={styles.icon} />
          <Text style={styles.label}>Age</Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>23</Text>
            <Ionicons name="chevron-down" size={20} color="#1e0e00" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8ed',
    paddingTop: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Futura',
    color: '#1e0e00',
  },
  content: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 27, 81, 0.25)',
  },
  label: {
    flex: 1, // Ensures space between icon and value
    fontSize: 14,
    fontFamily: 'Gotham',
    fontWeight: '400',
    color: '#1e0e00',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 14,
    fontFamily: 'Gotham',
    fontWeight: '400',
    color: '#1e0e00',
    marginRight: 10,
  },
});
