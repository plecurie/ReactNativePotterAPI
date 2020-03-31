import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function SpellTile(props) {
    const {item, onPress} = props;
    const {spell, effect} = item;

    return (
        <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.container}>
                <Text style={styles.spell}>{ spell }</Text>
                <Text style={styles.effect}>{ effect }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#08B6CE',
    },
    spell: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    effect: {
        fontSize: 14,
    },
});
