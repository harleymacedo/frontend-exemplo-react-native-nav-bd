import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Projeto() {

    const entrar = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
            <Text style={styles.text1}>Projeto</Text>
        </View>
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