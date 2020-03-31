import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import SpellTile from "../../components/SpellTile";

export default function SpellsList(props) {
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
            navigation.navigate('SpellDetail', {
                spellId: selectedItem.id,
                spellName: selectedItem.spell,
                spellType: selectedItem.type,
                spellEffect: selectedItem.effect
            });
        }, [navigation]);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={values => <SpellTile item={values.item} onPress={onPress} />}
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
