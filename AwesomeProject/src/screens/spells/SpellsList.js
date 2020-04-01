import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SpellTile from "../../components/SpellTile";
import {GryffindorTheme, HufflepuffTheme, RavenclawTheme, SlytherinTheme} from "../../themes/headerthemes";

export default function SpellsList(props) {
    const {route, navigation} = props;
    const {url, house} = route.params;
    const [data, setData] = useState([]);

    useEffect(() => {
        navigation.setOptions({title: 'Spells of Magic'}, route.params.theme);

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
            navigation.navigate('SpellDetail', {
                spellId: selectedItem.id,
                spellName: selectedItem.spell,
                spellType: selectedItem.type,
                spellEffect: selectedItem.effect,
                house: house
            });
        }, [navigation]);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={values => <SpellTile item={values.item} onPress={onPress}/>}
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
