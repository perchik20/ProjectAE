import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';

export default function Feed({navigation}){

    const loadScene = () => {
        navigation.navigate('User');
    }

    return(
        <View style={styles.genFeed}>
            
            
            <View style={styles.storyBar}>
                <ScrollView style={{width: '100%', height: '100%'}} contentContainerStyle={{ alignItems: 'center'}} horizontal={true}>
                    <View style={styles.storyIcon}>
                        <Text style={{fontSize: 12, top: 95, color: '#FFF',  textAlign: 'center', fontFamily: 'Arial'}}>1</Text>
                    </View>
                    <View style={styles.storyIcon}>
                        <Text style={{fontSize: 12, top: 95, color: '#FFF',  textAlign: 'center', fontFamily: 'Arial'}}>2</Text>
                    </View>
                    <View style={styles.storyIcon}>
                        <Text style={{fontSize: 12, top: 95, color: '#FFF',  textAlign: 'center', fontFamily: 'Arial'}}>3</Text>
                    </View>
                    <View style={styles.storyIcon}>
                        <Text style={{fontSize: 12, top: 95, color: '#FFF',  textAlign: 'center', fontFamily: 'Arial'}}>4</Text>
                    </View>
                    <View style={styles.storyIcon}>
                        <Text style={{fontSize: 12, top: 95, color: '#FFF',  textAlign: 'center', fontFamily: 'Arial'}}>5</Text>
                    </View>
                    <View style={styles.storyIcon}>
                        <Text style={{fontSize: 12, top: 95, color: '#FFF',  textAlign: 'center', fontFamily: 'Arial'}}>6</Text>
                    </View>
                    <View style={styles.storyIcon}>
                        <Text style={{fontSize: 12, top: 95, color: '#FFF',  textAlign: 'center', fontFamily: 'Arial'}}>7</Text>
                    </View>
                </ScrollView>
                
                

            </View>

            <View style={styles.mainFeed}>
                <View style={styles.profileBar}>
                    <View style={styles.profileIcon}></View>
                    <Text style={styles.profileNick}>userpick_1</Text>
                </View>
                <View style={styles.photoSec}></View>
                <View style={styles.buttonSec}>
                    <View style={styles.likeSec}>
                        <View style={{borderRadius: '50%', borderColor: 'red', width: 30, height: 30, borderWidth: 4}}></View>
                        <Text style={{textAlign: 'right', paddingRight: 20, width: '100%', fontSize: 16, color: 'white'}}>12</Text>
                    </View>
                    <View style={styles.commSec}>
                        <View style={{borderRadius: '50%', borderColor: 'grey', width: 30, height: 30, borderWidth: 4}}></View>
                        <Text style={{textAlign: 'right', paddingRight: 20, width: '100%', fontSize: 16, color: 'white'}}>3</Text>
                    </View>
                    <View style={styles.shareSec}>
                        <View style={{borderColor: 'grey', width: 30, height: 30, borderWidth: 4}}></View>
                        <Text style={{textAlign: 'right', paddingRight: 20, width: '100%', fontSize: 16, color: 'white'}}>1</Text>
                    </View>
                </View>
            </View>

            <View style={styles.menu}>
                <Button title='YourPage' onPress={loadScene} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    genFeed: {
        backgroundColor: '#696969',
        height: '100%',
        minWidth: '100%',
        alignItems: 'center',
        flex: 1
    },
    storyBar: {
        borderRadius: 15, 
        width: 408, 
        height: 140, 
        backgroundColor: '#1F1F1F',
        marginLeft: 3,
        marginRight: 3,
        marginTop: 10,
    },

    storyIcon:{
        borderRadius: '50%',
        backgroundColor: 'steelblue',
        width: 90,
        height: 90,
        marginLeft: 15,
        borderStyle:'solid',
        borderColor: '#F5B7B1',
        borderWidth: 2,

    },

    profileBar:{
        width: '100%',
        borderRadius: 15,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        height: 50,
        backgroundColor: '#1F1F1F',
        flexDirection: 'row',
        alignItems: 'center'

    },

    profileIcon:{
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: '#FFF',
        marginLeft: 10
    },
    profileNick:{
        fontSize: 14,
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
        backgroundColor: '#1B6566', 
        borderWidth: 4,
        borderColor: '#1F1F1F',      
        borderRadius: 3

    },

    mainFeed:{
        borderRadius: 15, 
        width: 408, 
        height: 570, 
        marginLeft: 3,
        marginRight: 3,
        marginTop: 10
    },
    buttonSec:{
        width: '100%',
        height: 57,
        flexDirection: 'row'
    },


    likeSec:{
        marginTop: 2,
        height: '100%',
        width: 134,
        backgroundColor: '#1F1F1F',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    commSec:{
        marginTop: 2,
        height: '100%',
        width: 134,
        backgroundColor: '#1F1F1F',
        borderRadius: 3,
        marginLeft: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

    },
    shareSec:{
        marginTop: 2,
        height: '100%',
        width: 134,
        backgroundColor: '#1F1F1F',
        borderRadius: 3,
        borderBottomRightRadius: 15,
        marginLeft: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    menu:{
        borderRadius: 15, 
        width: 408, 
        height: 110, 
        backgroundColor: '#1F1F1F',
        marginLeft: 3,
        marginRight: 3,
        marginTop: 10
    }

});
