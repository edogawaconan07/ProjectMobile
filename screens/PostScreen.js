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
import {AsyncStorage} from 'react-native';

export default class PostScreen extends Component{
  static navigationOptions = {
    title: 'Nhập thông tin',
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
      name:"",
      status:"",
      country:"",
      seat:"",
      year:"",
      price:"",
      ID : "",
      image: this.props.navigation.state.params.link,
    }
    this.retrieveData();
  }
  componentDidMount = async () =>{
    console.log(this.state.image.replace('file:///data/data/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FAwesomeProject-a44156e4-56ab-41b3-a2e5-6d532cec7a1d/ImagePicker/', ''));
  }
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@ID:key');
      if (value !== null) {
        // We have data!!
        this.setState({ID:value});
        console.log('HAHAHA');
      }
    } catch (error) {
      // Error retrieving data
    }
  }; 
  Nhap(){
    fetch("https://huynguyen1401.000webhostapp.com/insertcar.php",{
    "method":"POST",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      "CAR_NAME":this.state.name,
      "CARSTATUS":this.state.status,
      "ORIGIN":this.state.country,
      "NUM_OF_SEATS":this.state.seat,
      "MODEL":this.state.year,
      "PRICE":this.state.price,
      "USERID":this.state.ID,
      "IMAGE":this.state.image.replace('file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FAwesomeProject-5889fe97-90c2-4dc2-94b5-d549b38a9829/ImagePicker/', ''),
    })
  })
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      if(responseJson !='ERROR'){
      this.props.navigation.navigate('Loading');
      alert('Bạn vừa đăng tin thành công');
      }
      else{
        alert('Giá trị chưa phù hơp');
      }
    })
    .catch((e) => {
      alert(e)
    });
}
static navigationOptions = {
  title: 'Bài đăng',
  headerStyle: {
    backgroundColor: '#2D6097',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
  render(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={{fontWeight:"bold",fontSize:20, textAlign:'center'}}>ĐĂNG BÁN</Text>
        <TextInput style={styles.textInput}
        onChangeText={(name)=>this.setState({name})}
        value={this.state.name}
        keyboardType='email-address'
        placeholder='Tên xe'>
        </TextInput>
        <TextInput style={styles.textInput}
        autoCompleteType='email'
        onChangeText={(status)=>this.setState({status})}
        value={this.state.status}
        keyboardType='email-address'
        placeholder='Tình trạng'>
        </TextInput>
        <TextInput style={styles.textInput}
        autoCompleteType='street-address'
        onChangeText={(country)=>this.setState({country})}
        value={this.state.country}
        keyboardType='email-address'
        placeholder='Xuất xứ'>
        </TextInput>
        <TextInput style={styles.textInput}
        autoCompleteType='cc-number'
        onChangeText={(seat)=>this.setState({seat})}
        value={this.state.seat}
        keyboardType='number-pad'
        placeholder='Số chỗ'>
        </TextInput>
        <TextInput style={styles.textInput}
        autoCompleteType='cc-exp'
        onChangeText={(year)=>this.setState({year})}
        value={this.state.year}
        keyboardType='number-pad'
        placeholder='Năm sản xuất'>
        </TextInput>
        <TextInput style={styles.textInput}
        autoCompleteType='cc-number'
        onChangeText={(price)=>this.setState({price})}
        value={this.state.price}
        keyboardType='number-pad'
        placeholder='Giá bán'>
        </TextInput>
        <TouchableOpacity 
              onPress={() => this.Nhap()}
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
    borderBottomWidth:0.8,
    borderBottomColor:'#9ed4eb',
    marginTop:5,
    marginBottom:10,
    padding: 5,
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