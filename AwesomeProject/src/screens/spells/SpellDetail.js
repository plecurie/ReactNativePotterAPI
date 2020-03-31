import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SpellDetail(props) {

    const { route, navigation } = props;
    const { params } = route;

    useEffect(() => {
        navigation.setOptions({title: params.spellName});
    }, [navigation]);

    return (
        <View container={styles.container}>
            <Text>{ params.spellName } </Text>
            <Text>{ params.spellType } </Text>
            <Text>{ params.spellEffect } </Text>
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
