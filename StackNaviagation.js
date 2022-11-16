import UserPhoto from './pages/UserPhoto';
import FullStore from './pages/FullStore';
import User from './pages/User';
import Feed from './pages/Feed';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const FeedStackNavigator = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen
            name="Feed"
            component={Feed}
            options={{
                title: 'Feed',
                headerStyle: {height: 0, backgroundColor: '#696969'}
                }
            }
            />
        
        <Stack.Screen
            name="FullStore"
            component={FullStore}
            options={{
                title: 'FullStore',
                headerStyle: {height: 0, backgroundColor: '#696969', }
                }
            }
            />
    </Stack.Navigator>
    )
}

const UserStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="User"
            component={User}
            options={{
                title: 'UserName',
                headerStyle: {height: 0, backgroundColor: '#696969', }
                }
            }
            />
            <Stack.Screen
            name="UserPhoto"
            component={UserPhoto}
            options={{
                title: 'UserPhoto',
                headerStyle: {height: 0, backgroundColor: '#696969', }
                }
            }
            />




        </Stack.Navigator>
    )

}

export {FeedStackNavigator, UserStackNavigator};