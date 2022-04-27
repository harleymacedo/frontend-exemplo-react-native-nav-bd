import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home';
import Professor from './src/Professor';
import Disciplina from './src/Disciplina';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerStyle: {backgroundColor: '#224455'}
        }}/>
        <Stack.Screen name="Professor" component={Professor} />
        <Stack.Screen name="Disciplina" component={Disciplina} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}