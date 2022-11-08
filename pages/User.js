import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableOpacity, FlatList } from 'react-native';

export default function User({navigation}) {

  const loadScene = () => {
      navigation.navigate('Feed');
  }

  const [imgs, setImgs] = useState([
    {name: 'forest', image: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg', full_image: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'},
    {name: 'heart', image: 'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg', full_image: 'https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg'}
  ])


  return (
    <View style={{backgroundColor: '#696969'}}>

      <View style={styles.mainb} >
        <View style={{borderRadius: 15, width: 408, height: 140, backgroundColor: '#273746'}}>
          <View style={{left: 20, top: 20}}>
             <View style={styles.mainphoto} />
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
            <FlatList data={imgs} renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('UserPhoto', item)} >
                <Image
                    source={{
                      width: 150,
                      height: 150,
                      uri: item.image
                    }}
                />
              </TouchableOpacity>
            )} />
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