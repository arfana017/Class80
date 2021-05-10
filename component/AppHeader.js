import React from 'react';
import { StyleSheet, Text, View, Image, Header } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonateScreen from '../screens/DonateScreen'
import RequestScreen from '../screens/RequestScreen'

export default class AppHeader extends React.Component {
    render() {
        return(
            <View>
                 <Header
      centerComponent={{ text: All_About_Books , style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#eaf8fe"
    />
          
            </View>
        )
    }
}

/*

import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

const MyHeader = (props) => {
  return (
    <Header
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#eaf8fe"
    />
  );
};

export default MyHeader;


*/