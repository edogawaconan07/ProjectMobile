import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Constants from 'expo-constants';

export default class PostScreen extends Component{
  render(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Nhập thông tin xe</Text>
        <TextInput style={styles.textInput}
        placeholder='Nhập'>
        </TextInput>
        <Text style={styles.text}>Nhập thông tin xe</Text>
        <TextInput style={styles.textInput}
        placeholder='Nhập'>
        </TextInput>
        <Text style={styles.text}>Nhập thông tin xe</Text>
        <TextInput style={styles.textInput}
        placeholder='Nhập'>
        </TextInput>
        <Text style={styles.text}>Nhập thông tin xe</Text>
        <TextInput style={styles.textInput}
        placeholder='Nhập'>
        </TextInput>

        <TouchableOpacity 
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#ffffff',
  },
  form:{
    marginTop:40,
  },
  text:{
    marginTop:5,
    marginBottom:5,
  },
  textInput:{
    alignItems: 'center',
		justifyContent: 'center',		
    width:300,
    height:30,
  },
	buttonContainer:{
		marginTop:20,
		paddingVertical: 15,
		backgroundColor:'rgba(86,222,117,0.9)',
	},
	buttonText:{
		textAlign:'center',
		color: 'white',
		fontSize: 15,
		fontWeight: 'bold',
	},
});