import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image, Dimensions, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class CardItemCar extends Component {
	render() {
		return (
			<View style={styles.info}>
				<View style={styles.image}>
				<Image
						style={{ borderRadius: 15, resizeMode:'stretch',height:'100%',width:screenWidth-20 }}
						source={{uri:this.props.item.CarImage}}
					/>
				</View>
	
				<Text style={{ marginBottom: 10, marginTop: 10, marginLeft: 10,fontWeight:'bold',color:'#2E8B57' }}>
				{this.props.item.CarPrice} VNĐ
				</Text>
				<Text style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 14, marginLeft: 10 }}>
				{this.props.item.Car_Name}
				</Text>

				<View style={styles.content}>

					<View style={styles.text}>
						<Icon
							name='star'
							size={20}
							color='#FF9900'
						/>
						<Text style={{ marginLeft: 8 }}>{this.props.item.CarStatus}</Text>
					</View>

					<View style={styles.text}>
						<Icon
							name='car'
							size={20}
							color='#0066CC'
						/>
						<Text style={{ marginLeft: 8 }}>{this.props.item.CarSeat}</Text>
					</View>

					<View style={styles.text}>
						<Icon
							name='map-marker'
							size={20}
							color='#993333'
						/>
						<Text>{this.props.item.CarLocation}</Text>
					</View>

				</View>
			</View>

		);
	}
}
const styles = StyleSheet.create({
	info: {
		flex: 1,
		flexDirection: 'column',
		height: 320,
		backgroundColor: "#FFFFFF",
		marginTop: 5,
		marginBottom: 20,
		borderWidth: 0,
		borderColor: '#ddd',
		borderBottomWidth: 1,
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 2,
		borderRadius: 15,
		//paddingBottom: 1,
		elevation: 2,
	},
	image: {
		flex:0.8,
		//height:'60%'
	},
	content: {
		//flex:0.1,
		flexDirection: 'row',
	},
	text: {
		flexDirection: 'row',
		marginLeft: 20,
		marginRight: 10,
	},
})