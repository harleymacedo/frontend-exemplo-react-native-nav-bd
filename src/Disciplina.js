import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function Disciplina() {

    const entrar = () => {

    }

    return (
        <View style={styles.container}>
            <TextInput></TextInput>
            <TextInput></TextInput>
            <TouchableOpacity><Text>Professor</Text></TouchableOpacity>
            <TouchableOpacity><Text>Disciplina</Text></TouchableOpacity>
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

    },
    button1: {

    }
})