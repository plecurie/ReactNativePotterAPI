import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SpellDetail(props) {

    const { route, navigation } = props;
    const { params } = route;

    useEffect(() => {
        navigation.setOptions({title: params.spellName});
    }, [navigation]);

    return (
        <View style={{ backgroundColor: "#e6e6fa", height: '100%', justifyContent:'center', alignItems:'center' }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{ params.spellName } </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{ params.spellType } </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{ params.spellEffect } </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 0,
        backgroundColor: '#e6e6fa',
        minHeight: '10%',
        borderRadius: 5,
    }
});
