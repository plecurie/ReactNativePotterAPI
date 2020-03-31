import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HouseDetail(props) {

    const { route, navigation } = props;
    const { params } = route;

    useEffect(() => {
        navigation.setOptions({title: params.houseName});
    }, [navigation]);

    return (
        <View container={styles.container}>
            <Text>{ params.houseName } </Text>
            <Text>{ params.houseMascot } </Text>
            <Text>{ params.houseGhost } </Text>
            <Text>{ params.houseFounder } </Text>
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
