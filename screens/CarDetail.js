import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Constants from 'expo-constants';
import {AsyncStorage} from 'react-native';

export default class CarDetail extends Component{
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
            <Text style={styles.info}>{this.props.navigation.state.params.id}</Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='calendar'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Năm sản xuất</Text>
            <Text style={styles.info}></Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='alpha-s-circle-outline'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Tình trạng</Text>
            <Text style={styles.info}></Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='earth'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Xuất xứ</Text>
            <Text style={styles.info}></Text>
        </View>

        <Text style={styles.title}>Thông tin chi tiết</Text>
        <View style={styles.item}>
        <Icon
                name='car-door'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Số cửa</Text>
            <Text style={styles.info}></Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='seat-recline-normal'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Số chỗ</Text>
            <Text style={styles.info}></Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='car-cruise-control'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Hộp số</Text>
            <Text style={styles.info}></Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='car-battery'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Nhiên liệu</Text>
            <Text style={styles.info}></Text>
        </View>

        <Text style={styles.title}>Thông tin người bán</Text>
        <View style={styles.item}>
        <Icon
                name='account'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Tên người bán</Text>
            <Text style={styles.info}></Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='phone'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Số điện thoại</Text>
            <Text style={styles.info}></Text>
        </View>
        <View style={styles.item}>
        <Icon
                name='map-marker-outline'
                size={16}
                color='#efaa2b'
        />
            <Text style={styles.name}>Địa chỉ</Text>
            <Text style={styles.info}></Text>
        </View>
        <Text>Mô tả</Text>
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