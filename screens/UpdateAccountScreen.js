import * as React from 'react';
import { Button, Image, View,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class ImagePickerExample extends React.Component {
  constructor(props){
    super(props);
    this.state={
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXblSHIfV8-qrqQioNdk5nSUFZfvYRBU3BoTdiT3316F_74O8K&s',
      ID : "",
    }
    this.retrieveData();
  }
  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{this.state.ID}</Text>
      {image &&
      <Image 
      style={{borderRadius:50, width:80, height:80,marginTop:20, alignSelf:'center'}}
      source={{ uri: image }} 
      />}
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
      </View>
    );
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
        "USERID":this.state.ID,
      })
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        myData_user: responseJson,
      });
    })  
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}