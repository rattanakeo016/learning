import * as React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeContainer from '../screens/home/HomeContianer';
import CardContainer from '../screens/card/CardContainer';
import MapContainer from '../screens/map/MapContainer';
import ProfileContainer from '../screens/profile/ProfileContainer';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { styles } from './Style'

const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <Icon
                                name="home"
                                color={color}
                                style={styles.icon}
                            />
                        )
                    }
                }}
                name="Home" component={HomeContainer} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <Icon
                                color={color}
                                name="credit-card"
                                style={styles.icon}
                            />
                        )
                    }
                }}
                name="Card"
                component={CardContainer} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <Icon
                                color={color}
                                name="compass"
                                style={styles.icon}
                            />
                        )
                    }
                }}

                name="Map"
                component={MapContainer} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <Icon
                                color={color}
                                name="user"
                                style={styles.icon}
                            />
                        )
                    }
                }}
                name="Profile" component={ProfileContainer} />
        </Tab.Navigator>
    );
}
export default MainTabs