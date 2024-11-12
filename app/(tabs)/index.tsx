import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const Home = () => {
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
          <Image style={styles.sunIcon} source={require('./assets/Sun.png')} />
          <Text style={styles.iu}>400 IU</Text>
          <Text style={styles.statusText}>
            You are <Text style={styles.boldText}>Low</Text> on Vitamin D.
          </Text>
        </View>

        {/* Vitamin D Range Text */}
        <Text style={styles.rangeText}>
          Average Vitamin D levels range around <Text style={styles.boldText}>600 IU</Text>.
        </Text>

        {/* ON Button */}
        <TouchableOpacity style={[styles.button, styles.shadow]}>
          <Text style={styles.buttonText}>ON</Text>
          <View style={styles.buttonCircle} />
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
    paddingVertical: 90,
    paddingHorizontal: 30,
    height: "100%"
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
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
  sunIcon: {
    width: 160,
    height: 160,
    marginBottom: 15,
  },
  iu: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1e0e00",
    marginBottom: 10,
  },
  statusText: {
    fontSize: 16,
    color: "#1e0e00",
    textAlign: "center",
  },
  rangeText: {
    fontSize: 16,
    color: "#1e0e00",
    textAlign: "center",
    marginVertical: 30,
    width: "90%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffaa00",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e0e00",
    marginRight: 10,
  },
  buttonCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
});

export default Home;
