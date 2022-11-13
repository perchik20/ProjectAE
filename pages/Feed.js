import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, ScrollView, Image, Touchable, TouchableOpacity} from 'react-native';
import { MaterialIcons, FontAwesome, AntDesign, MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';




export default function Feed({navigation}){

    const loadScene = () => {
        navigation.navigate('User');
    }

    const [iconName, setIconName] = useState("heart-outline");
    const [count, setCount] = useState(12);


    return(
        <View style={styles.genFeed}>
            <View style={styles.storyBar}>
                <ScrollView style={{width: '100%', height: '100%'}} contentContainerStyle={{ alignItems: 'center'}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.storyIcon} />
                    {/* <Image
                        style={styles.storyIcon}
                        source={require('./img/store1.jpg')}
                    /> */}
                    <View style={styles.storyIcon} />
                    {/* <Image
                        style={styles.storyIcon}
                        source={require('./img/store2.png')}
                    /> */}
                    <View style={styles.storyIcon} />
                    {/* <Image
                        style={styles.storyIcon}
                        source={require('./img/store3.jpg')}
                    /> */}
                    <View style={styles.storyIcon} />
                    {/* <Image
                        style={styles.storyIcon}
                        source={require('./img/stpre4.jpg')}
                    /> */}
                    <View style={styles.storyIcon} />
                    {/* <Image
                        style={styles.storyIcon}
                        source={require('./img/store5.png')}
                    /> */}
                    <View style={styles.storyIcon} />
                    {/* <Image
                        style={styles.storyIcon}
                        source={require('./img/store6.jpg')}
                    /> */}
                    <View style={styles.storyIcon} />
                    {/* <Image
                        style={styles.storyIcon}
                        source={require('./img/store7.jpg')}
                    /> */}
                </ScrollView>
                
                

            </View>

            <View style={styles.mainFeed}>
                <View style={styles.profileBar}>
                    <View style={styles.profileIcon}></View>
                    {/* <Image
                        style={styles.profileIcon}
                        source={require('./img/sceleton.png')}
                    /> */}
                    <Text style={styles.profileNick}>userpick_1</Text>
                </View>
                <View style={styles.photoSec} />
                {/* <Image
                    style={styles.photoSec}
                    source={require('./img/egg.png')}
                /> */}
                <View style={styles.buttonSec}>
                    <View style={styles.likeSec}>
                        {/* <View style={{marginTop: 20, borderRadius: '50%', borderColor: '#970D75', width: 30, height: 30, borderWidth: 4}}></View> */}
                        <TouchableOpacity onPress={() => {
                            if(iconName == "heart-outline"){
                                setIconName("heart")
                                setCount(prev => prev + 1)
                            }
                            if(iconName == "heart"){
                                
                                setCount(prev => prev - 1)
                                setIconName("heart-outline")
                                
                            }
                        }} style={styles.likeSec}>
                            <MaterialCommunityIcons name={iconName} size={35} color="#970D75" /> 
                            <Text style={{fontWeight: 'bold', width: '50%', textAlign: 'center', fontSize: 16, color: 'white'}}>{count}</Text>
                        </TouchableOpacity>

                        
                    </View>
                    <View style={styles.commSec}>
                        {/* <View style={{marginTop: 20, borderRadius: '50%', borderColor: '#0E95B9', width: 30, height: 30, borderWidth: 4}}></View> */}
                        <FontAwesome name="comment-o" size={30} color="white" style={{width: '100%', position: 'absolute', paddingLeft: 15, paddingBottom: 10, paddingTop: 11, height: '100%'}}/>

                        <Text style={{fontWeight: 'bold', width: '50%', textAlign: 'right', fontSize: 16, color: 'white'}}>3</Text>
                    </View>
                    <View style={styles.shareSec}>
                        {/* <View style={{marginTop: 20, borderColor: '#0E95B9', width: 30, height: 30, borderWidth: 4}}></View> */}
                        <MaterialIcons name="ios-share" size={30} color="white" style={{width: '100%', position: 'absolute', paddingLeft: 15, paddingBottom: 10, paddingTop: 11, height: '100%'}}/>

                        <Text style={{fontWeight: 'bold', width: '50%', textAlign: 'right', fontSize: 16, color: 'white'}}>1</Text>
                    </View>
                </View>
            </View>

            <View style={styles.menu}>
                <TouchableOpacity style={{height: '100%', width: 134, alignItems: 'center', justifyContent: 'center', paddingBottom: 30}}>
                    <Ionicons name="home" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{height: '100%', width: 134, alignItems: 'center', marginLeft: 2, justifyContent: 'center', paddingBottom: 30}}>
                    <Ionicons name="md-add" size={35} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={loadScene} style={{height: '100%', width: 134, alignItems: 'center', marginLeft: 2, justifyContent: 'center', paddingBottom: 30}}>
                    <MaterialCommunityIcons name="account-supervisor-circle-outline" size={35} color="white" />
                </TouchableOpacity>
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
        backgroundColor: '#273746',
        marginLeft: 3,
        marginRight: 3,
        marginTop: 68,
    },

    storyIcon:{
        borderRadius: '50%',
        backgroundColor: '#FFF',
        width: 90,
        height: 90,
        marginLeft: 15,
        borderStyle:'solid',
        borderColor: 'purple',
        borderWidth: 2,

    },

    profileBar:{
        width: '100%',
        borderRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 50,
        backgroundColor: '#273746',
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
        backgroundColor: '#FFF', 
        borderWidth: 4,
        borderColor: '#273746',      
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

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
        backgroundColor: '#273746',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        
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

    menu:{
        borderRadius: 15, 
        width: 408, 
        height: 110, 
        backgroundColor: '#273746',
        marginLeft: 3,
        marginRight: 3,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    iconsStyle:{
        alignItems: 'center',
        paddingTop: 11, 
        width: '100%', 
        height: '100%', 
        paddingLeft: 15,
        position: 'absolute'

    }
});
