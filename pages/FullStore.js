import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default function UserPhoto({navigation, route}) {

    const [number, onChangeNumber] = React.useState(null);


  return (

    <View style={styles.genFeed}>

        <View style={styles.profileBar}>

            <TouchableOpacity style={styles.profileBar} onPress={() => navigation.navigate('User')}>
                <View style={styles.profileIcon}></View>
                <Text style={styles.profileNick}>usernick_1</Text>
                <Text style={{fontSize: 13, color: "white"}}>1/2</Text>
            </TouchableOpacity>

        </View>

        <View style={{paddingTop: 5}}>

            <Image
                source={route.params.image}
                style={{borderWidth: 4, borderColor: '#273746', borderRadius: 15, width: 408, height: 650}}
            />

        </View>

        <View style={{paddingTop: 20}}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="type message.."
            />
        </View>

    </View>    
    
  );
}

const styles = StyleSheet.create({

    genFeed: {
        backgroundColor: '#696969',
        height: '100%',
        minWidth: '100%',

        paddingTop: 67,
        
        alignItems: 'center'

    },

    profileBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        width: 180,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#273746',

        marginBottom: 3

    },

    profileIcon:{
        width: 25,
        height: 25,
        borderRadius: '50%',
        backgroundColor: '#FFF',
        
        marginRight: 10,

        
    },
    
    profileNick:{
        fontSize: 17,
        color: '#FFF',
        textAlign: 'center',
        marginRight: 10,
        

    },

    backgroundPhoto: {
        merginLeft: 3,
        marginTop: 3,
        height: 690,
        width: 408,
        backgroundColor: '#1e1e1e',
        borderRadius: 15,
        justifyContent: 'center',
        
    },

    input: {
        height: 10,
        width: 408,
        borderWidth: 3,
        borderColor: '#273746',
        padding: 30,
        backgroundColor: '#eeeeee',
        borderRadius: 15,
        fontSize: 20
      },



});