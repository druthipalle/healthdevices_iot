import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.accountPage}>
        <Image
          style={styles.ellipse}
        />
        <Text style={styles.name}>First Last</Text>
        <Text style={styles.personalDetails}>Personal Details</Text>
        <Text style={styles.settings}>Settings</Text>
        <Text style={styles.notifications}>Notifications</Text>
        <Text style={styles.privacy}>Privacy</Text>

        <View style={styles.line1} />
        <View style={styles.line3} />
        <View style={styles.line4} />
        <View style={styles.line5} />
        <View style={styles.line6} />

        <View style={styles.icon1} />
        <View style={styles.icon2} />
        <View style={styles.icon3} />
        <View style={styles.icon4} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F5FE',
  },
  accountPage: {
    width: 393,
    height: 700,
    backgroundColor: '#E8F5FE',
    position: 'relative',
  },
  ellipse: {
    width: 68,
    height: 67,
    position: 'absolute',
    left: 20,
    top: 70,
    borderRadius: 9999,
    backgroundColor: '#D9D9D9',
  },
  name: {
    position: 'absolute',
    left: 95,
    top: 94,
    color: '#001B51',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Futura',
  },
  personalDetails: {
    position: 'absolute',
    left: 95,
    top: 182,
    color: '#001B51',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Futura',
  },
  settings: {
    position: 'absolute',
    left: 95,
    top: 245,
    color: '#001B51',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Futura',
  },
  notifications: {
    position: 'absolute',
    left: 95,
    top: 311,
    color: '#001B51',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Futura',
  },
  privacy: {
    position: 'absolute',
    left: 93,
    top: 376,
    color: '#001B51',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Futura',
  },
  line1: {
    position: 'absolute',
    top: 157,
    width: 393,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 26.95, 81.26, 0.25)',
  },
  line3: {
    position: 'absolute',
    top: 222,
    width: 393,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 26.95, 81.26, 0.25)',
  },
  line4: {
    position: 'absolute',
    top: 287,
    width: 393,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 26.95, 81.26, 0.25)',
  },
  line5: {
    position: 'absolute',
    top: 352,
    width: 393,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 26.95, 81.26, 0.25)',
  },
  line6: {
    position: 'absolute',
    top: 417,
    width: 393,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 26.95, 81.26, 0.25)',
  },
  icon1: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 51,
    top: 239,
    backgroundColor: '#001B51',
  },
  icon2: {
    position: 'absolute',
    width: 21,
    height: 26,
    left: 53,
    top: 304,
    backgroundColor: '#001B51',
  },
  icon3: {
    position: 'absolute',
    width: 22,
    height: 22,
    left: 53,
    top: 177,
    backgroundColor: '#001B51',
  },
  icon4: {
    position: 'absolute',
    width: 20,
    height: 25,
    left: 54,
    top: 370,
    backgroundColor: '#001B51',
  }
});
