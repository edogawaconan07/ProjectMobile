import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Image 
        style={{borderRadius:50, width:80, height:80, marginBottom:10, alignSelf:'center'}}
        source={require('../assets/images/avata.jpg')}
        />
        <View style={styles.item}>
            <Text style={styles.name}>Họ tên</Text>
            <Text style={styles.info}>Họ tên</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.name}>Họ tên</Text>
            <Text style={styles.info}>Họ tên</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.name}>Họ tên</Text>
            <Text style={styles.info}>Họ tên</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  item: {
    margin:1,
    backgroundColor: '#ffffff',
    flexDirection:'row',
    borderWidth:0.5,
    padding:15,
    borderColor:'#DDDDDD'
  },
  name:{
    flex:0.5,
  },
  info: {
    flex:0.5,
    textAlign:'right',
  },
});