import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons'; // Import icon library

const Profile = () => {
  const router = useRouter(); 

  const menuItems = [
    { label: "Personal Details", icon: "person-circle-outline", path: "/personal-details" },
    { label: "Settings", icon: "settings-outline", path: "/settings" },
    { label: "Notifications", icon: "notifications-outline", path: "/notifications" },
    { label: "Privacy", icon: "lock-closed-outline", path: "/privacy" },
  ];

  const handleNavigation = (path) => {
    router.push(path); 
  };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image style={styles.profileIcon} source={require('./assets/Ellipse_4.png')} />
        <Text style={styles.profileName}>First Last</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.menuItem} 
            onPress={() => handleNavigation(item.path)}
          >
            <Ionicons name={item.icon} size={20} color="#ffaa00" style={styles.menuIcon} />
            <Text style={styles.menuText}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={20} color="#ffaa00" /> {/* Orange arrows */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf8ed",
    paddingTop: 70,
  },
  profileSection: {
    flexDirection: "row", 
    alignItems: "center", 
    marginVertical: 40,
    paddingHorizontal: 20,
  },
  profileIcon: {
    width: 68,
    height: 67,
    borderRadius: 9999,
    backgroundColor: "#d9d9d9",
  },
  profileName: {
    marginLeft: 20, 
    fontSize: 20,
    fontFamily: "Futura",
    fontWeight: "700",
    color: "#1e0e00",
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 27, 81, 0.25)",
  },
  menuIcon: {
    marginRight: 20,
  },
  menuText: {
    fontSize: 14,
    fontFamily: "Gotham",
    fontWeight: "400",
    color: "#1e0e00",
    flex: 1,
  },
});

export default Profile;
