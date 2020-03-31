import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function HouseTile(props) {
    const {item, onPress} = props;
    const {name, headOfHouse} = item;

    return (
        <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.headOfHouse}>{headOfHouse}</Text>
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
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    headOfHouse: {
        fontSize: 14,
    },
});
