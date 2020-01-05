import React, { Component } from 'react'
import { 
  Text, 
  View, 
 ActivityIndicator,
 StyleSheet,
 AsyncStorage 
} from 'react-native'

export default class Loading extends Component{
    constructor(props){
        super(props);
        this.loading();
    }
    loading = async () => {
        setTimeout(async () => {
            const token = await AsyncStorage.getItem('@ID:key');
            console.log(token);
            if(token !== null){
                this.props.navigation.navigate('Main');
            }
            else{
                this.props.navigation.navigate('SignIn');
            }
        })
    }
	render(){
		return(
            <View style={styles.container}>
                <Text>Đang loading đừng hối...</Text>
                <ActivityIndicator size="large" color="0061AC"></ActivityIndicator>
            </View>
		)
	}
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
