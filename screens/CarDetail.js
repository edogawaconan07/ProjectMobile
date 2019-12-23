import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  BackHandler,
} from 'react-native';
import Header from '../components/Header';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Constants from 'expo-constants';
import { StackActions } from 'react-navigation';

export default class CarDetail extends Component{
  static navigationOptions = {
    title: 'Thông tin xe',
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
        myData_car: [],
        carid:this.props.navigation.state.params.id,
      };
    }
    componentDidMount(){
      this.getdata();
    }

    getdata(){
      fetch("https://huynguyen1401.000webhostapp.com/getdatacar.php",{
        "method":"POST",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          "CARID":this.state.carid,
        })
      })
      .then((response)=>response.json())
      .then((responseJson)=>{
        this.setState({
          myData_car: responseJson,
        });
      })  
    }
  render(){
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor:'#ffffff', height:200}}>
        <Image 
        style={{ height:200,alignSelf:'center',width:'100%'}}
        source={require('../assets/images/car2.jpg')}
        />
      </View>

      <Text style={styles.title}>Thông tin xe</Text>
        <View style={styles.item}>
        <Icon
                name='car-sports'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Tên xe</Text>
            <Text style={styles.info}>{this.state.myData_car['CAR_NAME']}</Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='calendar'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Năm sản xuất</Text>
            <Text style={styles.info}>{this.state.myData_car['MODEL']}</Text>
        </View>

        <Text style={styles.title}>Thông tin chi tiết</Text>
        <View style={styles.item}>
        <Icon
                name='seat-recline-normal'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Số chỗ</Text>
            <Text style={styles.info}>{this.state.myData_car['NUM_OF_SEATS']}</Text>
        </View>

        <Text style={styles.title}>Thông tin người bán</Text>
        <View style={styles.item}>
        <Icon
                name='account'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Tên người bán</Text>
            <Text style={styles.info}>{this.state.myData_car['FULL_NAME']}</Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='phone'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Số điện thoại</Text>
            <Text style={styles.info}>{this.state.myData_car['FIRST_PHONE']}</Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='map-marker-outline'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Địa chỉ</Text>
            <Text style={styles.info}>{this.state.myData_car['ADDRESS']}</Text>
        </View>
        <Text style={styles.title}>Mô tả</Text>
        <TouchableOpacity 
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={styles.buttonText}>Đặt mua</Text>
        </TouchableOpacity>

    </SafeAreaView>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
  },
  header:{
    flexDirection:'row',
    backgroundColor:'white',
  },
  item: {
    backgroundColor: '#ffffff',
    flexDirection:'row',
    padding:15,
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
  title:{
    fontSize:16,
    padding:15,
    backgroundColor:'#f5f4f7'
  },
  buttonContainer:{
    marginTop:7,
    paddingVertical: 10,
    backgroundColor:'rgba(206,142,27,0.8)',
  },
  buttonText:{
    textAlign:'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
 },
});