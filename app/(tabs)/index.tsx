import { View, Text, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <LinearGradient
          colors={['#ffffff', 'purple']}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
      </View>
      <Text style={styles.levelText}>20 ng/mL</Text>
      <Text style={styles.statusText}>You are <Text style={styles.boldText}>Low</Text> on Vitamin D.</Text>
      <View style={styles.separator} />
      <Text style={styles.infoText}>Average Vitamin D levels are from 50 - 125 ng/mL.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f0f8', // Light blue background
    padding: 20,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: '#16203b', // Dark blue border
    justifyContent: 'flex-end',
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  gradient: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
  },
  levelText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16203b', // Dark blue
    marginTop: 16,
  },
  statusText: {
    fontSize: 16,
    color: '#16203b',
    marginTop: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  separator: {
    width: '80%',
    height: 1,
    backgroundColor: '#b0c4de', // Light grayish blue
    marginVertical: 16,
  },
  infoText: {
    fontSize: 14,
    color: '#16203b',
    textAlign: 'center',
  },
});
