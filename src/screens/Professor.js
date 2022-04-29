import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function Professor() {
    return (
        <View>
            <Text>Professor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#124050',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        fontSize: 20,
        color: "#fff"
    }
});