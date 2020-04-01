import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SpellDetail(props) {

    const {route, navigation} = props;
    const {params} = route;

    useEffect(() => {
        navigation.setOptions({title: params.spellName});
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{params.spellName} </Text>
            <Text style={styles.others}>{params.spellType} </Text>
            <Text style={styles.others}>{params.spellEffect} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e6e6fa",
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    others: {
        fontSize: 20,
        fontWeight: 'bold'
    }

});
