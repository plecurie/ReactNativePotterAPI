import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function SpellTile(props) {
    const {item, onPress} = props;
    const {spell, type} = item;

    return (
        <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.container}>
                <Text style={styles.spell}>{spell}</Text>
                <Text style={styles.type}>{type}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#e6e6fa',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spell: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    type: {
        fontSize: 14,
    },
});
