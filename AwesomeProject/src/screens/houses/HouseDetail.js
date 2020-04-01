import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function HouseDetail(props) {

    const {route, navigation} = props;
    const {params} = route;
    const [customBackgroundColor, setBackgroundColor] = useState();
    const [customTextColor, setTextColor] = useState();
    const [url, setUrl] = useState();

    useEffect(() => {
        navigation.setOptions({title: params.houseName});
        switch (params.houseName) {
            case 'Gryffindor':
                setBackgroundColor("#b22222");
                setTextColor('#ffd700');
                setUrl(require('../../images/blason-gryffondor.jpg'));
                return;
            case 'Slytherin':
                setBackgroundColor("#006400");
                setTextColor('#c0c0c0');
                setUrl(require("../../images/Slytherin.png"));
                return;
            case 'Ravenclaw':
                setBackgroundColor("#483d8b");
                setTextColor('#ffff00');
                setUrl(require("../../images/f108882551241ec4eb3b43f0f340a02e.jpg"));
                return;
            case 'Hufflepuff':
                setBackgroundColor("#daa520");
                setTextColor('#fff8dc');
                setUrl(require("../../images/blason-poufsouffle.jpg"));
                return;
        }
    }, [navigation]);

    return (
        <View style={{
            backgroundColor: customBackgroundColor,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image style={styles.image} source={url}/>
            <Text style={{color: customTextColor, fontSize: 40, fontWeight: 'bold'}}>{params.houseName} </Text>
            <Text style={{color: customTextColor, fontSize: 20}}>Mascot : {params.houseMascot} </Text>
            <Text style={{color: customTextColor, fontSize: 20}}>Ghost : {params.houseGhost} </Text>
            <Text style={{color: customTextColor, fontSize: 20}}>Founder : {params.houseFounder} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        borderRadius: 5,
        marginBottom: 30,
        alignSelf: 'center',
        width: 200,
        height: 200
    },
});
