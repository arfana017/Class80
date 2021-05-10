import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import AppHeader from '../component/AppHeader'

export default class RequestScreen extends React.Component {
    constructor() {
        this.state = {
            bookName: '',
            reason: '',
            userId: firebase.auth().currentUser.email
        }
    }

    createUniqueId() {
        return Math.random().toString(36).substring(7)
    }

    update =(bookName, reason)=> {
        var userId = this.state.userId
        var UID = this.createUniqueId()
        db.collection('requested_books').add({
            book_name: bookName,
            reason_to_request: reason,
            user_id: userId,
            request_id: UID
        })

        this.setState({
            bookName: '',
            reason: '',
        })

        return Alert.alert('Book requested succesfully')

    }

    render() {
        return(
            <View>
                <AppHeader/>
                <KeyboardAvoidingView style = {styles.keyBoardStyle}>
                <TextInput
                    onChangeText={(text)=>{
                        this.setState({bookName: text})
                    }}
                    value = {this.state.bookName}
                    placeholder= {'Name of Book'}
                    style = {styles.formTextInput}
                />
                <TextInput
                style = {[styles.formTextInput,{height:300}]}
                    onChangeText={text=>{
                        this.setState({reason: text})
                    }}
                    multiline
                    numberOfLines ={8}
                    value = {this.state.reason}
                    placeholder= {'Reason for getting book'}
                    
                />

                <TouchableOpacity style = {styles.button} onPress = {()=>{this.update(this.state.bookName, this.state.reason)}}>
                    <Text>Request</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

//use arrow functions to call multiple functions

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )