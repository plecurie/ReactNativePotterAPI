import React, { useCallback, useState, useEffect } from 'react';
import{ Image, View, TouchableOpacity,  Text, StyleSheet } from 'react-native';
import { GryffindorTheme, SlytherinTheme, RavenclawTheme, HufflepuffTheme } from '../themes/headerthemes';
import {
    GryffindorButtonTheme,
    HufflepuffButtonTheme,
    RavenclawButtonTheme,
    SlytherinButtonTheme
} from "../themes/buttonthemes";

export default function Home(props) {

    const { navigation } = props;
    const [ url, setUrl ] = useState();
    const [ house, setHouse ] = useState();
    const [ customButton, setButton ] = useState();

    useEffect(() => {
        navigation.setOptions({
            title: "Harry Potter API",
        });
        updateHouse();
    }, []);

    useEffect(() => {

        switch (house) {
            case '"Gryffindor"':
                navigation.setOptions(GryffindorTheme);
                setButton(GryffindorButtonTheme);
                setUrl(require("../images/blason-gryffondor.jpg"));
                return;
            case '"Slytherin"':
                navigation.setOptions(SlytherinTheme);
                setButton(SlytherinButtonTheme);
                setUrl(require("../images/Slytherin.png"));
                return;
            case '"Ravenclaw"':
                navigation.setOptions(RavenclawTheme);
                setButton(RavenclawButtonTheme);
                setUrl(require("../images/f108882551241ec4eb3b43f0f340a02e.jpg"));
                return;
            case '"Hufflepuff"':
                navigation.setOptions(HufflepuffTheme);
                setButton(HufflepuffButtonTheme);
                setUrl(require("../images/blason-poufsouffle.jpg"));
                return;
        }
    }, [house]);

    const updateHouse = useCallback(()=> {
        fetch('https://www.potterapi.com/v1/sortingHat')
            .then((response) => {
                return response.text()
            })
            .then((randomHouse) => {
                setHouse(randomHouse);
            })
            .catch((error) => console.error(error))
    }, []);

    const onCharactersTouch = useCallback(() => {
        navigation.navigate('CharactersList', { url: 'https://www.potterapi.com/v1/characters?key=$2a$10$Icjn5f4SD27YEQMMMYdDWewEDjA2mScJ9T2uGaPzckVX785evcaZi', button: customButton });
    }, [navigation]);

    const onHousesTouch = useCallback(() => {
        navigation.navigate('HousesList', { url: 'https://www.potterapi.com/v1/houses?key=$2a$10$Icjn5f4SD27YEQMMMYdDWewEDjA2mScJ9T2uGaPzckVX785evcaZi', button: customButton });
    }, [navigation]);

    const onSpells = useCallback(() => {
        navigation.navigate('SpellsList', { url: 'https://www.potterapi.com/v1/spells?key=$2a$10$Icjn5f4SD27YEQMMMYdDWewEDjA2mScJ9T2uGaPzckVX785evcaZi', button: customButton });
    }, [navigation]);

    return(
            <View style={styles.container}>
                <Image source = {url}
                       style = {styles.image}
                />
                <Text style={styles.welcome}> { house } </Text>
                <TouchableOpacity onPress={updateHouse}>
                    <Text style={ customButton }>Change House</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onCharactersTouch}>
                    <Text style={ customButton }>Characters</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onHousesTouch}>
                    <Text style={ customButton }>Houses</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSpells}>
                    <Text style={ customButton }>Spells</Text>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        position: 'relative'
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        bottom: 10,
        color: '#add8e6'
    },
    image: {
        aspectRatio: 1,
        borderRadius: 5,
        marginBottom: 30,
        alignSelf: 'center',
        width: 200,
        height: 200
    },
    button: {
        backgroundColor: '#a52a2a',
        margin:2,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 12,
        color: '#ffd700',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
        borderStyle: "solid",
    }

});


