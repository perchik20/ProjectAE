import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';

export default function User({navigation}) {

  const loadScene = () => {
      navigation.navigate('Feed');
  }

  return (
    <View style={{backgroundColor: '#696969'}}>

      <View style={styles.mainb} >
        <View style={{borderRadius: 15, width: 408, height: 140, backgroundColor: '#273746'}}>
          <View style={{left: 20, top: 20}}>
             <View style={styles.mainphoto} />
            {/* <Image
            style={styles.mainphoto}
            source={require('./img/sceleton.png')}
            />   */}
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
        <View style={{paddingTop: 4.5,borderRadius: 15, width: 408, height: 570, backgroundColor: '#273746'}}>
        <View style={{width: 403, height: 561}}>
          <ScrollView style={{width: '100%', height:'90%'}} contentContainerStyle={{ alignContent: 'center'}} horizontal={false}>

          <View style={styles.firstrow}>
            <View style={styles.photos} />
            {/* <Image 
              style={styles.photos}
              source={require('./img/egg.png')}
            /> */}
          </View>

          <View style={styles.firstrow}>
            <View style={styles.photos} />
          {/* <Image 
              style={styles.photos}
              source={require('./img/store1.jpg')}
            /> */}
          </View>

          <View style={styles.firstrow}>
            <View style={styles.photos} />
          {/* <Image 
              style={styles.photos}
              source={require('./img/store2.png')}
            /> */}
          </View>
          
          <View style={styles.secondrow}>
            <View style={styles.photos} />
          {/* <Image 
              style={styles.photos}
              source={require('./img/store3.jpg')}
            /> */}
          </View>

          <View style={styles.secondrow}>
            <View style={styles.photos} />
          {/* <Image 
              style={styles.photos}
              source={require('./img/stpre4.jpg')}
            /> */}
          </View>

          <View style={styles.secondrow}>
            <View style={styles.photos} />
          {/* <Image 
              style={styles.photos}
              source={require('./img/store5.png')}
            /> */}
          </View>
                    
          <View style={styles.thirdrow}>
            <View style={styles.photos} />
          {/* <Image 
              style={styles.photos}
              source={require('./img/egg.png')}
            /> */}
          </View>

          <View style={styles.thirdrow}>
            <View style={styles.photos} />
          {/* <Image 
              style={styles.photos}
              source={require('./img/egg.png')}
            /> */}
          </View>

          <View style={styles.thirdrow}>
            <View style={styles.photos} />
          {/* <Image 
              style={styles.photos}
              source={require('./img/egg.png')}
            /> */}
          </View>

          <View style={styles.thirdrow}>
            <View style={styles.photos} />
          {/* <Image 
              style={styles.photos}
              source={require('./img/store7.jpg')}
            /> */}
          </View>

          <View style={styles.thirdrow}>
            <View style={styles.photos} />
          {/* <Image 
              style={styles.photos}
              source={require('./img/store6.jpg')}
            /> */}
          </View>
          
          </ScrollView>
        </View>

        </View>
      </View>

      <View style={styles.secondsb} >
        <View style={{borderRadius: 15, width: 408, height: 110, backgroundColor: '#273746'}}>
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
    paddingTop: 68},

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
    backgroundColor: '#FFF',
    paddingLeft: 15,
  },

  photos: {
    borderRadius: 15,
    width: 130,
    height: 130,
    backgroundColor: '#FFF',
  }
});