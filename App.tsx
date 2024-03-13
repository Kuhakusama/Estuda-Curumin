import { useFonts, Signika_300Light, Signika_400Regular, Signika_500Medium, Signika_600SemiBold, Signika_700Bold } from "@expo-google-fonts/signika"
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Verification from './src/screens/Verification/verifaction';
import NewPassword from "./src/screens/Verification/NewPassword";
import Home from "./src/screens/Home";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

type StackNavigation = {
  Login: undefined;
  Verification: undefined;
  Register: undefined;
  NewPassword: undefined;
}

type TabNavigation = {
  Home: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>
export type TabsTypes = NativeStackNavigationProp<TabNavigation>


export default function App() {
  const [fontsLoaded] = useFonts({
    Signika_300Light, 
    Signika_400Regular, 
    Signika_500Medium, 
    Signika_600SemiBold, 
    Signika_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null
  }

//caso exista o erro de tipagem 

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Login"
        > 
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
