import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter(); 

  const handleNavigation = () => {
    router.push("/home"); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollContent}>
        {/* Greeting Section */}
        <View style={styles.greetingContainer}>
          <Image style={styles.profileIcon} source={require('./assets/Ellipse_4.png')} />
          <Text style={styles.greetingText}>
            Good morning, <Text style={styles.boldText}>First Last</Text>.
          </Text>
        </View>

        {/* Card Section */}
        <View style={[styles.card, styles.shadow]}>
          <Text style={styles.statusText}>
            Please select which body parts are <Text style={styles.boldText}>exposed to the sun</Text>.
          </Text>

          {/* Add Human Body Figure */}
          <Image 
            source={require('./assets/HumanOutlineSimple 1.png')} // Replace with your image path
            style={styles.humanBodyImage} 
          />
        </View>

        {/* Done Button */}
        <TouchableOpacity 
          style={[styles.button, styles.shadow, { backgroundColor: '#ffaa00' }]} // Keep the color constant
          onPress={handleNavigation}
        >
          <Text style={[styles.buttonText, { color: '#1e0e00' }]}>
            {'Done'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf8ed",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 100, // Adjusted to move the content down
    paddingHorizontal: 30,
    height: "100%",
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 90,
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  greetingText: {
    fontSize: 20,
    color: "#1e0e00",
    fontFamily: "Futura",
  },
  boldText: {
    fontWeight: "700",
  },
  card: {
    width: "100%",
    backgroundColor: "#faf8ed",
    borderRadius: 25,
    borderColor: "#ffaa00",
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 30,
    aspectRatio: 1,
  },
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  statusText: {
    fontSize: 16,
    color: "#1e0e00",
    textAlign: "center",
    marginBottom: 10, // Space between text and image
  },
  humanBodyImage: {
    width: 180, // Adjust the width as necessary
    height: 221, // Adjust the height as necessary
    marginTop: -2, // Add some space between the text and image
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
  },
});

export default Index;
