import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home'
import Cart from '../pages/cart'
const Stack = createStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: "meu Carrinho"
        }} />
    </Stack.Navigator>
  )
}