import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GryffindorTheme, HufflepuffTheme, RavenclawTheme, SlytherinTheme} from "../../themes/headerthemes";

export default function CharacterDetail(props) {

    const {route, navigation} = props;
    const {params} = route;
    const {house} = params;

    useEffect(() => {
        navigation.setOptions({title: params.characterName});
    }, [navigation]);

    useEffect(() => {

        switch (house) {
            case '"Gryffindor"':
                navigation.setOptions(GryffindorTheme);
                return;
            case '"Slytherin"':
                navigation.setOptions(SlytherinTheme);
                return;
            case '"Ravenclaw"':
                navigation.setOptions(RavenclawTheme);
                return;
            case '"Hufflepuff"':
                navigation.setOptions(HufflepuffTheme);
                return;
        }
    }, [house]);

    return (
        <View style={styles.container}>
            <Text style={styles.name}> {params.characterName} </Text>
            <Text style={styles.others}> {params.characterHouse} </Text>
            <Text style={styles.others}> {params.characterSchool} </Text>
            <Text style={styles.others}> {params.characterAlias} </Text>
            <Text style={styles.others}> {params.characterAnimagus} </Text>
            <Text style={styles.others}> {params.characterIsMinistryOfMagic} </Text>
            <Text style={styles.others}> {params.characterIsOrderOfThePhoenix} </Text>
            <Text style={styles.others}> {params.characterIsDumbledoresArmy} </Text>
            <Text style={styles.others}> {params.characterIsDeathEater} </Text>
            <Text style={styles.others}> {params.characterBloodStatus} </Text>
            <Text style={styles.others}> {params.characterspecies} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0e68c",
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    others: {
        fontSize: 20
    }
});
