import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { Video } from 'expo-av';

export default function Professor({navigation}) {

    const navegar = () => {
        console.log('navegando');
        navigation.navigate('Projeto');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Professor</Text>
            <Button title="Projetos" onPress={navegar} style={styles.button1} />
            <Video
              source={require('../../assets/videoplayback.mp4')}
              rate={1.0}
              volume={0.5}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={{ width: 400, height: 300 }}
              useNativeControls={true}
            />
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
},
button1: {
    borderColor: '#fff',
    borderStyle: 'solid',
    color: '#fff',
    borderWidth: 2
}
});