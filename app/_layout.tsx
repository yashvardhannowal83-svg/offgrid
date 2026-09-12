import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return <SafeAreaProvider><StatusBar style="light" /><Stack screenOptions={{headerStyle:{backgroundColor:'#000'},headerTintColor:'#ECEEF1',headerShadowVisible:false,contentStyle:{backgroundColor:'#000'}}}/></SafeAreaProvider>;
}
