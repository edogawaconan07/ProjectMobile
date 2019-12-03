import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Constants from 'expo-constants';
import {AsyncStorage} from 'react-native';

export default class AccountScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      myData_user: [],
      ID : "",
    }
    this.retrieveData();
  }
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@ID:key');
      if (value !== null) {
        // We have data!!
        this.setState({ID:value});
        this.getdata();
      }
    } catch (error) {
      // Error retrieving data
    }
  }; 
  getdata(){
    fetch("https://huynguyen1401.000webhostapp.com/getdata_user.php",{
      "method":"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "EMAIL":this.state.ID,
      })
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        myData_user: responseJson,
      });
    })  
  }
  render(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor:'#ffffff', height:120,marginBottom:20}}>
        <Image 
        style={{borderRadius:50, width:80, height:80,marginTop:20, alignSelf:'center'}}
        source={require('../assets/images/avata.jpg')}
        />
      </View>
        <View style={styles.item}>
        <Icon
                name='account'
                size={16}
                color='#1186fe'
        />
            <Text style={styles.name}>Họ tên</Text>
            <Text style={styles.info}>{this.state.myData_user['FULL_NAME']}</Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='email-outline'
                size={16}
                color='#1186fe'
        />
            <Text style={styles.name}>Email</Text>
            <Text style={styles.info}>{this.state.myData_user['EMAIL']}</Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='phone'
                size={16}
                color='#1186fe'
        />
            <Text style={styles.name}>Số điện thoại</Text>
            <Text style={styles.info}>{this.state.myData_user['FIRST_PHONE']}</Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='map-marker-outline'
                size={16}
                color='#1186fe'
        />
            <Text style={styles.name}>Địa chỉ</Text>
            <Text style={styles.info}>{this.state.myData_user['ADDRESS']}</Text>
        </View>
        <TouchableOpacity 
              style={{marginTop:20}}
              onPress={() => this.props.navigation.navigate('SignIn')}>
        <View style={styles.item}>
        <Icon
                name='settings-outline'
                size={16}
                color='#35bb7f'
        />
              <Text style={{marginLeft:10}}>Cập nhật tài khoản</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('SignIn')}>
        <View style={styles.item}>
        <Icon
                name='logout-variant'
                size={16}
                color='#f33659'
        />
              <Text style={{marginLeft:10}}>Đăng xuất</Text>
        </View>
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
    textAlign:'right',
  },
});