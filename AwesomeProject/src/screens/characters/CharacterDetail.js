import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CharacterDetail(props) {

    const { route, navigation } = props;
    const { params } = route;

    useEffect(() => {
        navigation.setOptions({title: params.characterName});
    }, [navigation]);

    return (
        <View style={{ backgroundColor: "#f0e68c", height: '100%', justifyContent:'center', alignItems:'center' }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}> { params.characterName } </Text>
            <Text style={{ fontSize: 20 }}> { params.characterHouse } </Text>
            <Text style={{ fontSize: 20 }}> { params.characterSchool } </Text>
            <Text style={{ fontSize: 20 }}> { params.characterAlias } </Text>
            <Text style={{ fontSize: 20 }}> { params.characterAnimagus } </Text>
            <Text style={{ fontSize: 20 }}> { params.characterIsMinistryOfMagic } </Text>
            <Text style={{ fontSize: 20 }}> { params.characterIsOrderOfThePhoenix } </Text>
            <Text style={{ fontSize: 20 }}> { params.characterIsDumbledoresArmy } </Text>
            <Text style={{ fontSize: 20 }}> { params.characterIsDeathEater } </Text>
            <Text style={{ fontSize: 20 }}> { params.characterBloodStatus } </Text>
            <Text style={{ fontSize: 20 }}> { params.characterspecies } </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 0,
        backgroundColor: '#f0e68c',
        minHeight: '10%',
        borderRadius: 5,
    }
});
