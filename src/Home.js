import React, {useState} from 'react';
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
        fontSize: 18,
        fontWeight: 'bold'
    },
    button1: {
        backgroundColor: '#aaffff',
        width: 100,
        height: 30,
        marginBottom: 20
    }
})