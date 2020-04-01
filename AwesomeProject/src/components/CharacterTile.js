import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function CharacterTile(props) {
    const {item, onPress} = props;
    const {name, role} = item;

    return (
        <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.role}>{role}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f0e68c',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    role: {
        fontSize: 14,
    }
});
