import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const more = () => {
  return (
    <SafeAreaView>
      <Text>more</Text>
    </SafeAreaView>
  )
}

export default more


// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [loaded, error] = useFonts({
//     'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
//   });

//   useEffect(() => {
//     if (loaded || error) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded, error]);

//   if (!loaded && !error) {
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Inter Black</Text>
//       <Text style={{ fontSize: 30 }}>Platform Default</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// });
