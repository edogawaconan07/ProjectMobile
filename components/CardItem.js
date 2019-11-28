import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image, Dimensions, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class CardItem extends Component {
	render() {
		return (

			<View style={styles.info}>
				<View style={styles.image}>
				<Image

						style={{ borderRadius: 15, width: '100%', height: '100%' }}
						source={require('../assets/images/car1.jpg')}
					/>
				</View>
	
				<Text style={{ marginBottom: 10, marginTop: 10, marginLeft: 10 }}>
				{this.props.item.XeID}
				</Text>
				<Text style={{ marginBottom: 10, fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>
				{this.props.item.Tenxe}
				</Text>
				<View style={styles.content}>

					<View style={styles.text}>
						<Icon
							name='star'
							size={20}
							color='#FF9900'
						/>
						<Text style={{ marginLeft: 8 }}>Mới</Text>
					</View>

					<View style={styles.text}>
						<Icon
							name='car'
							size={20}
							color='#0066CC'
						/>
						<Text style={{ marginLeft: 8 }}>4 chỗ</Text>
					</View>

					<View style={styles.text}>
						<Icon
							name='map-marker'
							size={20}
							color='#993333'
						/>
						<Text>Hồ Chí Minh</Text>
					</View>

				</View>
			</View>

		)
	}
}
const styles = StyleSheet.create({
	info: {
		flex: 1,
		flexDirection: 'column',
		height: 350,
		backgroundColor: "#FFFFFF",
		marginTop: 5,
		marginBottom: 20,
		marginLeft: 20,
		marginRight: 20,
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
		paddingTop: 2,
		elevation: 2,
	},
	image: {
		flex:0.9,
		//height:'60%'
	},
	content: {
		flex:0.1,
		flexDirection: 'row',
	},
	text: {
		flexDirection: 'row',
		marginLeft: 20,
		marginRight: 10,
	},
})