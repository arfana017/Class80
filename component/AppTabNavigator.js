import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonateScreen from '../screens/DonateScreen'
import RequestScreen from '../screens/RequestScreen'

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks: {
        screen: DonateScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("./assets/image0.jpeg")}/>,
            tabBarLabel: 'Donate Books'
        }
    },
    BookRequest: {
        screen: RequestScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("./assets/image1.jpeg")}/>,
            tabBarLabel: 'Request Books'
        }
    }
        
})