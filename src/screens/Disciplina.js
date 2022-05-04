import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function Disciplina() {

    const playSound = async () => {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
           require('../../assets/japaozin.mp3')
        );
        //setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync(); 
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Disciplina</Text>
            <Button title="Tocar Japaozin" onPress={playSound} />
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