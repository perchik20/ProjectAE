import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function User({navigation}) {

  const loadScene = () => {
      navigation.navigate('Feed');
  }

  return (
    <View style={{backgroundColor: '#696969'}}>

      <View style={styles.mainb} >
        <View style={{borderRadius: 15, width: 408, height: 140, backgroundColor: '#1F1F1F'}}>
          <View style={{left: 20, top: 20}}>
            <View style={styles.mainphoto}/>
          </View>

          <View style={{left: 150, top: -39}}>
            <Text style={{fontSize: 18, color: 'white'}}>180 Followers</Text>
          </View>

          <View style={{left: 280, top: -60}}>
            <Text style={{ fontSize: 18, color: 'white'}}>10 Following</Text>
          </View>

        </View>

      </View>

      <View style={styles.secondsb} >
        <View style={{paddingTop: 4.5,borderRadius: 15, width: 408, height: 570, backgroundColor: '#1F1F1F'}}>
        <View style={{width: 403, height: 561}}>
          <ScrollView style={{width: '100%', height:'90%'}} contentContainerStyle={{ alignContent: 'center'}} horizontal={false}>

          <View style={styles.firstrow}>
            <View style={styles.photos}/>
          </View>

          <View style={styles.firstrow}>
            <View style={styles.photos}/>
          </View>

          <View style={styles.firstrow}>
            <View style={styles.photos}/>
          </View>
          
          <View style={styles.secondrow}>
            <View style={styles.photos}/>
          </View>

          <View style={styles.secondrow}>
            <View style={styles.photos}/>
          </View>

          <View style={styles.secondrow}>
            <View style={styles.photos}/>
          </View>
                    
          <View style={styles.thirdrow}>
            <View style={styles.photos}/>
          </View>

          <View style={styles.thirdrow}>
            <View style={styles.photos}/>
          </View>

          <View style={styles.thirdrow}>
            <View style={styles.photos}/>
          </View>

          <View style={styles.thirdrow}>
            <View style={styles.photos}/>
          </View>

          <View style={styles.thirdrow}>
            <View style={styles.photos}/>
          </View>
          
          </ScrollView>
        </View>

        </View>
      </View>

      <View style={styles.secondsb} >
        <View style={{borderRadius: 15, width: 408, height: 110, backgroundColor: '#1F1F1F'}}>
          <Button title='Feed' onPress={loadScene} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainb: {
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 10},

  secondsb: {
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 10
  },

  firstrow: {
    paddingLeft: 5,
    paddingTop:5,
    paddingRight:5
  },

  thirdrow: {
    left: 268, 
    top: -810,
    paddingLeft: 5,
    paddingTop:5,
    paddingRight:5
  },

  secondrow: {
    left: 134, 
    top: -405, 
    paddingLeft: 5, 
    paddingTop:5, 
    paddingRight:5
  },

  mainphoto: {
    borderRadius: 100,
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
    paddingLeft: 15,
  },

  photos: {
    borderRadius: 15,
    width: 130,
    height: 130,
    backgroundColor: '#1B6566',
  }
});