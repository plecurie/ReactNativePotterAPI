import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CharacterDetail(props) {

    const { route, navigation } = props;
    const { params } = route;

    useEffect(() => {
        navigation.setOptions({title: params.characterName});
    }, [navigation]);

    return (
        <View container={styles.container}>
            <Text> { params.characterName } </Text>
            <Text> { params.characterHouse } </Text>
            <Text> { params.characterSchool } </Text>
            <Text> { params.characterAlias } </Text>
            <Text> { params.characterAnimagus } </Text>
            <Text> { params.characterIsMinistryOfMagic } </Text>
            <Text> { params.characterIsOrderOfThePhoenix } </Text>
            <Text> { params.characterIsDumbledoresArmy } </Text>
            <Text> { params.characterIsDeathEater } </Text>
            <Text> { params.characterBloodStatus } </Text>
            <Text> { params.characterspecies } </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 0,
        backgroundColor: '#d6dbe1',
        minHeight: '10%',
        borderRadius: 5,
    }
});
