import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import EstatisticasScreen from "../Screens/Estatistica/index";
import TurmasScreen from "../Screens/Turmas/index";
import PerfilScreen from "../Screens/Perfil/index";
import { cores } from "../themes/constants";
import Home from './assets/home-2.svg'
import Estatistica from './assets/activity.svg'
import Turmas from './assets/fatrows.svg'
import Perfil from './assets/profile.svg'


const Tab = createBottomTabNavigator();



export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: cores.header,
          borderTopColor: 'transparent',
          paddingBottom: 5,
          paddingTop: 5,
          borderTopRightRadius:15,
          borderTopLeftRadius:15,
          height:60
        },
        tabBarActiveTintColor: cores.white,
      })}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: undefined,
          tabBarIcon: ({ size, color }) => (
            <Home width={40}/>
          )
        }}
      />

      <Tab.Screen
        name="EstatisticasScreen"
        component={EstatisticasScreen}
        options={{
          headerShown: false,
          tabBarLabel: undefined,
          tabBarIcon: ({ size, color }) => (
            <Estatistica width={40}/>
          )
        }}
      />

      <Tab.Screen
        name="TurmasScreen"
        component={TurmasScreen}
        options={{
          headerShown: false,
          tabBarLabel: undefined,
          tabBarIcon: ({ size, color }) => (
            <Turmas width={40}/>
          )
        }}
      />

      <Tab.Screen
        name="PerfilScreen"
        component={PerfilScreen}
        options={{
          headerShown: false,
          tabBarLabel: undefined,
          tabBarIcon: ({ size, color }) => (
            <Perfil width={40}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
