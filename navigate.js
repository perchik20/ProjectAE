import React from 'react'
import User from './pages/User';
import Feed from './pages/Feed';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen
            name="Feed"
            component={Feed}
            options={{
                title: 'Feed',
                headerStyle: {height: 70, backgroundColor: '#696969'}
                }
            }
            />
            <Stack.Screen
            name="User"
            component={User}
            options={{
                title: 'UserName',
                headerStyle: {height: 70, backgroundColor: '#696969', }
                }
            }
            />

        </Stack.Navigator>
    </NavigationContainer>;
}

