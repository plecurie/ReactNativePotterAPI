import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './screens/Home';
import HousesList from "./screens/houses/HousesList";
import CharactersList from "./screens/characters/CharactersList";
import SpellsList from "./screens/spells/SpellsList";
import HouseDetail from "./screens/houses/HouseDetail";
import CharacterDetail from "./screens/characters/CharacterDetail";
import SpellDetail from "./screens/spells/SpellDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions= {{
                title: 'Global Title Navigation'
            }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{title: 'HomeView'}}/>
            <Stack.Screen
                name="HousesList"
                component={HousesList}
                options={{title: 'HousesView'}}/>
            <Stack.Screen
                name="CharactersList"
                component={CharactersList}
                options={{title: 'CharactersView'}}/>
            <Stack.Screen
                name="SpellsList"
                component={SpellsList}
                options={{title: 'SpellsView'}}/>
            <Stack.Screen
                name="HouseDetail"
                component={HouseDetail}
                options={{title: 'HouseDetailView'}}/>
            <Stack.Screen
                name="CharacterDetail"
                component={CharacterDetail}
                options={{title: 'CharacterDetailView'}}/>
            <Stack.Screen
                name="SpellDetail"
                component={SpellDetail}
                options={{title: 'SpellDetailView'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
