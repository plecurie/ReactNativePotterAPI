import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CharacterTile from "../../components/CharacterTile";
import {GryffindorTheme, HufflepuffTheme, RavenclawTheme, SlytherinTheme} from "../../themes/headerthemes";

export default function CharactersList(props) {
    const {route, navigation} = props;
    const {url, house} = route.params;
    const [data, setData] = useState([]);

    useEffect(() => {
        navigation.setOptions({title: 'List of Characters'});

        async function getItems() {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json'
                    }
                });
                const body = await response.json();
                setData(body);
                console.log(house)
            } catch (err) {
                console.error(err)
            }
        }

        getItems();

    }, []);

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

    const onPress = useCallback(
        selectedItem => {
            navigation.navigate('CharacterDetail', {
                characterId: selectedItem.id,
                characterName: selectedItem.name,
                characterRole: selectedItem.role,
                characterHouse: selectedItem.house,
                characterSchool: selectedItem.school,
                characterAlias: selectedItem.alias,
                characterAnimagus: selectedItem.animagus,
                characterIsMinistryOfMagic: selectedItem.ministryOfMagic,
                characterIsOrderOfThePhoenix: selectedItem.orderOfThePhoenix,
                characterIsDumbledoresArmy: selectedItem.dumbledoresArmy,
                characterIsDeathEater: selectedItem.deathEater,
                characterBloodStatus: selectedItem.bloodStatus,
                characterspecies: selectedItem.species,
                house: house
            });
        }, [navigation]);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={values => <CharacterTile item={values.item} onPress={onPress}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 12,
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign: 'center',
        borderStyle: "solid",
    },
});
