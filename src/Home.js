import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function Home({navigation}) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const navegarProfessor = () => {
        navigation.navigate('Professor');
    }

    const navegarDisciplina = () => {
        navigation.navigate('Disciplina');
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <TextInput></TextInput>
            <TextInput></TextInput>
            <TouchableOpacity style={styles.button1} onPress={navegarProfessor}><Text style={styles.text1}>Professor</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={navegarDisciplina}><Text style={styles.text1}>Disciplina</Text></TouchableOpacity>
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
        textAlign: 'center',
        fontSize: 26,
        color: '#fff'
    },
    button1: {
        backgroundColor: '#116611',
        width: 160,
        height: 40,
        marginBottom: 20,
        borderRadius: 4
    }
})