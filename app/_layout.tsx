import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Don't render anything until fonts are loaded
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Main tabs */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        {/* Personal Details Page - Hide Header */}
        <Stack.Screen
          name="personal-details"
          options={{
            headerShown: false, // Hides the header for this page
          }}
        />
        
        {/* DailyTracking Screen - Add it to your stack */}
        <Stack.Screen
          name="daily-tracking"
          options={{
            headerShown: false, // Optional, can modify header visibility
          }}
        />
        
        {/* Not Found Page */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
