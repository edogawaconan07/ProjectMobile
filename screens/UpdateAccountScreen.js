import * as React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class ImagePickerExample extends React.Component {
  static navigationOptions = {
    title: 'Thay ảnh Avartar',
    headerStyle: {
      backgroundColor: '#2D6097',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  state = {
    ID:this.props.navigation.state.params.id,
    image:this.props.navigation.state.params.key,
  };
  
  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}   
        <TouchableOpacity 
              onPress={this._pickImage}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Chọn ảnh đại diện</Text>
        </TouchableOpacity>        
      </View>
    );
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
    //this.uploadBackground(result.uri);
    this.uploadBackground(result.uri);
    
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  uploadBackground= async (uri) => {
    let apiUrl = 'https://huynguyen1401.000webhostapp.com/UserImage.php';
    
    let formData = new FormData();

    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];

    this.setState(
      {
      imageURI:uri,
    });
    console.log(this.state.imageURI)
    formData.append('ID', {
      uri: this.state.imageURI,
      name:this.state.ID,
      type: `image/${fileType}`,
    });
    formData.append('image', {
      uri: this.state.imageURI,
      name: this.state.imageURI,
      type: `image/${fileType}`,
    });
    console.log(formData)
    let options = {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      
    };
    return fetch(apiUrl, options);
    }
}
const styles = StyleSheet.create({
	buttonContainer:{
		marginTop:20,
    paddingVertical: 15,
    borderRadius:15,
		backgroundColor:'#663366',
	},
	buttonText:{
		textAlign:'center',
		color: 'white',
    fontSize: 15,
    padding:7,
		fontWeight: 'bold',
	},
});