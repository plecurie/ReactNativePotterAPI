import React, { useCallback, useState, useEffect } from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from "@react-navigation/native";
import{ View, Text, StyleSheet, Button } from 'react-native';
import { GryffindorTheme, SlytherinTheme, RavenclawTheme, HufflepuffTheme } from '../themes/themes';


export default function Home(props) {

    const { navigation } = props;
    const [ house, setHouse ] = useState();
    const [ theme, setTheme ] = useState();

    useEffect(() => {
        updateHouse();
    }, []);

    useEffect(() => {
        updateTheme();
    }, []);

    const updateTheme = useCallback(() => {
        if (house === "Gryffindor") setTheme(GryffindorTheme);
        if (house === "Slytherin") setTheme(SlytherinTheme);
        if (house === "Ravenclaw") setTheme(RavenclawTheme);
        if (house === "Hufflepuff") setTheme(HufflepuffTheme);
    }, []);

    const updateHouse = useCallback(()=> {
        fetch('https://www.potterapi.com/v1/sortingHat')
            .then((response) => {
                return response.text()
            })
            .then((randomHouse) => {
                setHouse(randomHouse);
                updateTheme();
            })
            .catch((error) => console.error(error))
    }, []);

    const onCharactersTouch = useCallback(() => {
        navigation.navigate('CharactersList', { url: 'https://www.potterapi.com/v1/characters?key=$2a$10$Icjn5f4SD27YEQMMMYdDWewEDjA2mScJ9T2uGaPzckVX785evcaZi' });
    }, [navigation]);

    const onHousesTouch = useCallback(() => {
        navigation.navigate('HousesList', { url: 'https://www.potterapi.com/v1/houses?key=$2a$10$Icjn5f4SD27YEQMMMYdDWewEDjA2mScJ9T2uGaPzckVX785evcaZi' });
    }, [navigation]);

    const onSpells = useCallback(() => {
        navigation.navigate('SpellsList', { url: 'https://www.potterapi.com/v1/spells?key=$2a$10$Icjn5f4SD27YEQMMMYdDWewEDjA2mScJ9T2uGaPzckVX785evcaZi' });
    }, [navigation]);

    return(
            <View style={styles.container}>
                <Text style={styles.welcome}> { house } </Text>
                <Button onPress={ updateHouse } title={ "Random House" } color="#841584" />
                <Button onPress={ onCharactersTouch } title={"Characters"}/>
                <Button onPress={ onHousesTouch } title={"Houses"}/>
                <Button onPress={ onSpells } title={"Spells"}/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },

});


