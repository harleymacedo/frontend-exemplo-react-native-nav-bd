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

function MainTabNavigator () {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Professor" component={Professor} />
            <Tab.Screen name="Disciplina" component={Disciplina} />
        </Tab.Navigator>
    )
}
// const screens = (
//   <NavigationContainer>
//     <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} 
//         options={{
//             headerStyle: {
//             backgroundColor: '#124050',
//             },
//             headerTintColor: "#fff"
//         }}/>
//         <Stack.Screen name="Perfil" component={Perfil} 
//         options={{
//             headerStyle: {
//             backgroundColor: '#124050',
//             },
//             headerTintColor: "#fff"
//         }}
//         />
//         <Stack.Screen name="Cadastro" component={Cadastro} 
//         options={{
//             headerStyle: {
//             backgroundColor: '#124050',
//             },
//             headerTintColor: "#fff"
//         }}
//         />
//     </Stack.Navigator>
//   </NavigationContainer>
// )


export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={MainTabNavigator} />
            <Stack.Screen name="Pefil" component={Perfil} />
            <Stack.Screen name="Grade" component={Grade} />
            <Stack.Screen name="Projeto" component={Projeto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}