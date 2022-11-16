import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
import {FeedStackNavigator, UserStackNavigator} from './StackNaviagation'

// Screns
import User from './pages/User'
import Feed from './pages/Feed'
import AddPhoto from './pages/AddPhoto'

//Screen names
const userName = 'User';
const feedName = 'Feed';
const addName = 'AddPhoto';

const Tab = createBottomTabNavigator()

export default function Navigate() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName={userName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => { 
                    let iconName;
                    let rn = route.name;

                    if(rn === userName){
                        iconName = focused ? 'account-supervisor-circle' : 'account-supervisor-circle-outline';
                    }else if (rn === feedName) {
                        iconName = focused ? 'home-variant' : 'home-variant-outline';
                    }else if (rn === addName) {
                        iconName = focused ? 'plus-thick' : 'plus-outline';
                    }

                    return <MaterialCommunityIcons name={iconName} size={35} color={color} />

                },
            })}>

            <Tab.Screen name={feedName} component={FeedStackNavigator} options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarLabelStyle: {
                    fontSize: 15,
                    size: 40,
                    fontColor: 'black',
                    
                },
                 tabBarStyle: {backgroundColor: '#273746', borderRadius: 15, width: 408, marginLeft: 3, marginTop: -55}}}/>


            <Tab.Screen name={addName} component={AddPhoto} options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarLabelStyle: {
                    fontSize: 15,
                    size: 40,
                    fontColor: 'black',
                    
                },
                tabBarStyle: {backgroundColor: '#273746', borderRadius: 15, width: 408, marginLeft: 3, marginTop: -55}}}/>

            <Tab.Screen name={userName} component={UserStackNavigator} options={{
                // tabBarBadge: 12,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarLabelStyle: {
                    fontSize: 15,
                    size: 40,
                    fontColor: 'black'
                },
                    tabBarStyle: {backgroundColor: '#273746', borderRadius: 15, width: 408, marginLeft: 3, marginTop: -55}}}/>

                

        </Tab.Navigator>

    </NavigationContainer>

    
  );
}