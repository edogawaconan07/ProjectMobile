import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  ImageBackground, 
  TouchableWithoutFeedback, 
  StatusBar, 
  TextInput, 
  SafeAreaView,
  Keyboard, 
  TouchableOpacity, 
  KeyboardAvoidingView, } from 'react-native'

export default class SignIn extends Component{
	render(){
		return(
      <SafeAreaView style={styles.container}>
      <ImageBackground style={{width: '100%',height: '100%'}} source={require('./images/screen-0.jpg')}>
      <StatusBar barStyle='light-content' />
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.title}>Rao bán xe HHH</Text> 
          </View>
          <View style={styles.infoContainer}>
            <TextInput style={styles.input} 
            placeholder='Tài khoản'
            placeholderTextColor='white'
            keyboardType='email-address'
            returnKeyType='next'
            autoCorrect={false}
            onSubmitEditing={() => this.refs.txtPassword.focus()}
            />
            <TextInput style={styles.input} 
            placeholder='Mật khẩu'
            placeholderTextColor='white'
            returnKeyType='go'
            autoCorrect={false}
            secureTextEntry={true}
            ref={'txtPassword'}
            />
            <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('HomePage')}>
              <Text style={styles.buttonText}>Đăng Nhập</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={{color:'white',textDecorationLine: 'underline',}}>Chưa có tài khoản?</Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </ImageBackground>
      </SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		//backgroundColor: '#11cfc5',
		flex: 1,
    flexDirection: 'column',
	},
	logoContainer:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',		
	},
	logo:{
		width:120,
		height:60,
	},
	title:{
    marginTop:5,
    marginBottom:20,
		opacity: 0.9,
		textAlign: 'center', 
		fontSize: 30,
		fontWeight:'bold',
    color:'white',
    //backgroundColor:'white',
    width:'100%'
	},
	infoContainer:{

		left: 0,
		right: 0,
		bottom: 30,
		height: 250,
    padding: 20,
	},
	input:{
		height:40,
		backgroundColor: 'white',
		paddingHorizontal: 10,
		marginTop:7,
		color:'white',
		//borderWidth: 2,
		//borderColor:'white',
    //borderBottomColor: '#11cfc5',
    backgroundColor:'rgba(47,79,79,0.1)',
	},
	buttonContainer:{
		marginTop:7,
		paddingVertical: 15,
		backgroundColor:'rgba(47,79,79,0.1)',
	},
	buttonText:{
		textAlign:'center',
		color: 'white',
		fontSize: 13,
		fontWeight: 'bold',
	},
})