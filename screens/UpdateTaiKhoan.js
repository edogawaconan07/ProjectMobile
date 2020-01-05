import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Constants from 'expo-constants';
import {AsyncStorage} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class UpdateTaiKhoan extends Component{
  static navigationOptions = {
    title: 'Cập nhật thông tin',
    headerStyle: {
      backgroundColor: '#2D6097',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props){
    super(props);
    this.state={
      ID : "",
      name:'',
      email:'',
      phone:'',
      address:'',
    }
    this.retrieveData();
  }
  
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@ID:key');
      if (value !== null) {
        // We have data!!
        this.setState({ID:value});
      }
    } catch (error) {
      // Error retrieving data
    }
  }; 
  
  updateData(){
    fetch("https://huynguyen1401.000webhostapp.com/updateTaiKhoan.php",{
    "method":"POST",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      "USERID":this.state.ID,
      "FULL_NAME":this.state.name,
      "EMAIL":this.state.email,
      "FIRST_PHONE":this.state.phone,
      "ADDRESS":this.state.address,
    })
  })
    .then((response)=>response.json())
    .then((responseJson)=>{
      if(responseJson !="ERROR"){
        alert('Update thành công');
        this.props.navigation.navigate('AccountScreen');
    }else{
      alert('Update thất bại');
    }   
   })
    .catch(() => {
    });
}
  
  render(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <Icon 
        name='account'
        size={16}
        color='#1186fe'/>

        <TextInput 
          onChangeText={(name)=>this.setState({name})}
          value={this.state.name}
          keyboardType='email-address'
          placeholder='Họ tên'>
        </TextInput>
      </View>

      <View style={styles.item}>
        <Icon 
          name='email-outline'
          size={16}
          color='#1186fe'/>
          <TextInput 
            style={styles.name}
            onChangeText={(email)=>this.setState({email})}
            value={this.state.email}
            keyboardType='email-address'
            placeholder={'Email'}/>
        
      </View>

      <View style={styles.item}>
        <Icon 
          name='phone'
          size={16}
          color='#1186fe'/>
          <TextInput 
            style={styles.name}
            onChangeText={(phone)=>this.setState({phone})}
            value={this.state.phone}
            keyboardType='email-address'
            placeholder={'Số điện thoại'}/>
        
      </View>
      
      <View style={styles.item}>
        <Icon 
          name='map-marker-outline'
          size={16}
          color='#1186fe'/>
          <TextInput 
            style={styles.name}
            onChangeText={(address)=>this.setState({address})}
            value={this.state.address}
            keyboardType='email-address'
            placeholder={'Địa chỉ'}/>
        
      </View>
      <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={() => this.updateData()}>
              <Text style={styles.buttonText}>Cập nhật</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f5f4f7',
  },
  item: {
    backgroundColor: '#ffffff',
    flexDirection:'row',
    borderWidth:0.5,
    padding:15,
    borderColor:'#DDDDDD'
  },
  name:{
    marginLeft:10,
    flex:0.5,
  },
  info: {
    color:'#7e7e7f',
    flex:0.5,
    textAlign:'left',
  },
  input:{
    color:'black',
    marginLeft:5,
  },

  buttonContainer:{
    marginTop:7,
    paddingVertical: 15,
    backgroundColor:'blue',
  },
  buttonText:{
    textAlign:'center',
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
});