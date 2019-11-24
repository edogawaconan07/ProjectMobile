import React, { Component } from 'react'
import { StyleSheet,Text, View ,Button, Image,Dimensions,ScrollView,ListView } from 'react-native'
//import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import Snapcarousel  from "./SnapCarousel/SnapCarousel"
// import {ENTRIES1,ENTRIES2} from './entries'
import CardItem from '../components/CardItem'
import { NetworkInfo } from "react-native-network-info";


var URL="http://localhost/AppMobile/getdata.php"
export default class HomeScreen extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
// 		}
// 	}
	
// 	fetchData(){
// 		fetch(URL)
// 		.then((response)=>response.json())
// 		.then((responseData)=>{
// 			this.setState({
// 				dataSource:this.state.dataSource.cloneWithRows(responseData)
// 			})
// 		})
// 		.done()
// 	}
	
	componentDidMount = async() =>{
		NetworkInfo.getIPV4Address().then(ipv4Address => {
			console.log(ipv4Address);
		  });
		
		//this.fetchData();
	}
// 	taoHang(property){
// 		return(
// 		<View>
// 			<Text>{property.carid}</Text>
// 		</View>
// 		);
// 	}



	render() {
		return (
			<ScrollView style={styles.main}>
				<View></View>
				{/* <ListView dataSource={this.state.dataSource} renderRow={this.taoHang}/>				 */}
			</ScrollView>
		)
	}
}
// const styles = StyleSheet.create({
// 	main: {
// 		flex: 1,
// 		flexDirection: 'column',
// 		backgroundColor: "#FFFFFF",
// 	},
	
// })
// const portraitStyles = StyleSheet.create({
// 		main: {
// 		flex: 1,
// 		flexDirection: 'column',
// 		backgroundColor: "#FFFFFF",
// 	},
//    });
   
//    const landscapeStyles = StyleSheet.create({
// 	main: {
// 		flex: 1,
// 		flexDirection: 'column',
// 		backgroundColor: "#FFFFFF",
// 	},
//    });