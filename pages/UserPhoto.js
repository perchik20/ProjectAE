import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function UserPhoto({route}) {

  return (

    <View style={styles.genFeed}>
        <View style={styles.mainFeed}>
            <View style={styles.profileBar}>
                <View style={styles.profileIcon}></View>
                <Text style={styles.profileNick}>userpick_1</Text>
            </View>
            <View style={{height: 480, backgroundColor: '#273746', borderRadius: 15, justifyContent: 'center', paddingLeft: 15, marginTop: 2}}>
                <Image
                    source={{
                        width: '97%',
                        height: '97%',
                        uri: route.params.full_image
                    }}
                />
            </View>

            <View style={styles.buttonSec}>

                <View style={styles.likeSec}>
                    {/* <View style={{marginTop: 20, borderRadius: '50%', borderColor: '#970D75', width: 30, height: 30, borderWidth: 4}}></View> */}
                    <AntDesign name="hearto" size={35} color="#970D75" style={styles.iconsStyle} />


                    <Text style={{fontWeight: 'bold', textAlign: 'right', width: '50%', fontSize: 16, color: 'white'}}>12</Text>
                </View>

                <View style={styles.shareSec}>
                    {/* <View style={{marginTop: 20, borderColor: '#0E95B9', width: 30, height: 30, borderWidth: 4}}></View> */}
                    <MaterialIcons name="ios-share" size={30} color="white" style={{width: '100%', position: 'absolute', paddingLeft: 15, paddingBottom: 10, paddingTop: 11, height: '100%'}}/>

                    <Text style={{fontWeight: 'bold', textAlign: 'right', width: '50%', fontSize: 16, color: 'white'}}>1</Text>
                </View>
                
            </View>

            <View style={{ backgroundColor: '#273746', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15,}}>
                <Text style={styles.text}>Comments:</Text>
            </View>
            
        </View>
    </View> 
    
  );
}

const styles = StyleSheet.create({

    mainBlock: {
        justifyContent: 'center'
    },

    genFeed: {
        backgroundColor: '#696969',
        height: '100%',
        minWidth: '100%',
        justifyContent: ''
        // alignItems: 'center',
        // flex: 1
    },

    mainFeed:{
        borderRadius: 15, 
        width: 408, 
        height: 570, 
        marginLeft: 3,
        marginRight: 3,
        marginTop: 66,
        marginBottom: 5 
    },

    profileBar:{
        width: '100%',
        borderRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 100,
        backgroundColor: '#273746',
        flexDirection: 'row',
        alignItems: 'center'

    },

    profileIcon:{
        width: 60,
        height: 60,
        borderRadius: '50%',
        backgroundColor: '#FFF',
        marginLeft: 10
    },
    
    profileNick:{
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
        width: 378,
        textAlign: 'left',
        paddingLeft: 10
    },

    photoSec: {
        marginTop: 2,
        width: '100%',
        height: 460,
        backgroundColor: '#FFF', 
        borderWidth: 4,
        borderColor: '#273746',      
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },

    buttonSec:{
        width: '100%',
        height: 57,
        flexDirection: 'row'
    },

    likeSec:{
        marginTop: 2,
        height: 53,
        width: 202,
        backgroundColor: '#273746',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    
    commSec:{
        marginTop: 2,
        height: '100%',
        width: 134,
        backgroundColor: '#273746',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginLeft: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

    },

    shareSec:{
        marginTop: 2,
        height: 53,
        width: 202,
        backgroundColor: '#273746',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginLeft: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        marginTop: 5,
        marginLeft: 10,
        height: 220,
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },

    iconsStyle: {
        paddingTop: 11, 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        paddingLeft: 15

    }


});
