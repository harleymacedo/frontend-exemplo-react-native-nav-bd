import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Professor from '../screens/Professor';
import Disciplina from '../screens/Disciplina';
import Perfil from '../screens/Perfil';
import Projeto from '../screens/Projeto';
import Grade from '../screens/Grade';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Professor" component={Professor} 
            options={{
                title: "Professor Home",
                headerStyle: {
                backgroundColor: '#124050',
                },
                headerTintColor: "#fff"
            }}/>
            <Stack.Screen name="Projeto" component={Projeto} 
            options={{
                title: "Projeto",
                headerStyle: {
                backgroundColor: '#124050',
                },
                headerTintColor: "#fff"
            }}/>
        </Stack.Navigator>
    )
}


export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen name="ProfessorTab" component={StackNavigator} options={{ tabBarLabel: 'Professor' }} />
            <Tab.Screen name="DisciplinaTab" component={Disciplina} options={{ tabBarLabel: 'Disciplina' }}/>
        </Tab.Navigator>
  </NavigationContainer>

  );
}