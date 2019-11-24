import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  SafeAreaView,
  ScrollView,
  Dimensions
} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


export default class LoginView extends Component {


  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <SafeAreaView>
      <View style={{backgroundColor:'#11cfc5'}}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={{width:screenWidth,alignContent:'center', height:200,padding:15}}>
        <Image 
        source={require('../assets/images/Register.png')}
        style={{}}
        />
        </View>
      <View style={styles.container}>

        <Text style={styles.textHeader}>Đăng nhập</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Tên đăng nhập"
              keyboardType="default"/>
        </View>

        <Text style={styles.textHeader}>Đăng nhập</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <Text style={styles.textHeader}>Đăng nhập</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Mật khẩu"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('signup')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>
        </View>

        <View style={{height:200}}></View>
        </ScrollView>
        </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin:5,
    borderWidth:1,
    borderRadius:15,
    borderColor:'white',
    flex: 1,
    resizeMode:'contain',
    paddingBottom:50,
    backgroundColor:'white',
    padding:10,
    height:screenHeight,
  },
  textHeader:{
    fontSize:12,
    fontWeight:'bold',
    marginBottom:5,
    marginLeft:20,
    color:'#11cfc5',
  },
  inputContainer: {
      borderBottomColor: '#11cfc5',
      borderBottomWidth: 1,
      width:'90%',
      marginLeft:20,
      height:45,
      marginTop:10,
      marginBottom:5,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      color:'#11cfc5',
      height:35,
      marginLeft:16,
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    marginLeft:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#11cfc5",
  },
  buttonText: {
    color: 'white',
    fontWeight:'bold',
  }
});
 