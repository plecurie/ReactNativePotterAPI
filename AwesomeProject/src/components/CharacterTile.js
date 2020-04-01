import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function CharacterTile(props) {
    const {item, onPress} = props;
    const {name, description} = item;

    return (
        <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#cd853f',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
    },
});
