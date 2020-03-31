import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CharacterTile from "../../components/CharacterTile";

export default function CharactersList(props) {
    const { route, navigation } = props;
    const { url } = route.params;
    const [ data, setData ] = useState([]);

    useEffect(() => {
        async function getItems() {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json'
                    }
                });
                const body = await response.json();
                setData(body)
            } catch (err) {
                console.error(err)
            }
        }

        getItems();

    }, []);

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
                characterspecies: selectedItem.species
            });
        }, [navigation]);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={values => <CharacterTile item={values.item} onPress={onPress} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
