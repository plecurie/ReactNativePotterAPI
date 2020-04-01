import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GryffindorTileTheme, HufflepuffTileTheme, RavenclawTileTheme, SlytherinTileTheme} from "../themes/tiletheme";

export default function HouseTile(props) {
    const {item, onPress} = props;
    const {name, headOfHouse} = item;
    const [customTile, setTile] = useState();

    useEffect(() => {
        switch (name) {
            case 'Gryffindor':
                setTile(GryffindorTileTheme);
                return;
            case 'Slytherin':
                setTile(SlytherinTileTheme);
                return;
            case 'Ravenclaw':
                setTile(RavenclawTileTheme);
                return;
            case 'Hufflepuff':
                setTile(HufflepuffTileTheme);
                return;
        }
    }, [name]);

    return (
        <TouchableOpacity onPress={() => onPress(item)}>
            <View style={customTile}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.headOfHouse}>{headOfHouse}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    headOfHouse: {
        fontSize: 14,
    }
});
