import React, {useState, useEffect, useCallback} from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import HouseTile from "../../components/HouseTile";

export default function HousesList(props) {
    const { route, navigation } = props;
    const { params } = route;
    const { url } = params;
    const [ data, setData ] = useState([]);

    useEffect(() => {
        navigation.setOptions({title: 'Houses of Hogwarts'}, route.params.theme);
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
            navigation.navigate('HouseDetail', {
                houseId: selectedItem.id,
                houseName: selectedItem.name,
                houseMascot: selectedItem.mascot,
                houseGhost: selectedItem.houseGhost,
                houseFounder: selectedItem.founder,
            });
        }, [navigation]);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={values => <HouseTile item={values.item} onPress={onPress} />}
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
        color: '#ffd700',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
        borderStyle: "solid",
    },
});
