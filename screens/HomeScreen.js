import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  FlatList } from 'react-native';
import CardItem from '../components/CardItem'
// class FlatListItem extends Component {
//   render() {
//     return (
//       //Định dạng css từng item theo ý.
//       <View style={styles.flatlist_container}>
//         <Text style={styles.text}>{this.props.item.XeID}</Text>
//         <Text style={styles.text}>{this.props.item.Tenxe}</Text>
//       </View>
//     );
//   }
// }



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Khai báo array rỗng là myData để chứa dữ liệu load về.
      myData: [],
    };
  }

  loadDataFromServer = () => {
    //Đổi lại IP cho đúng. có thể đăng ký hosting để dùng khỏi đổi ip tới lui. Gợi ý hosting free 000webhost
    fetch('https://huynguyen1401.000webhostapp.com/Getdata.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          myData: responseJson,
        });
      })
      .catch((e) => {
        alert(e)
      });
  }
  componentDidMount() {
    //Tạo hàm loadDataFromServer riêng tí còn dùng nữa khỏi viết lại
    this.loadDataFromServer();
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.myData}
          renderItem={({ item, index }) => {
            return (
              //Tạo 1 class mới tên FLatListItem có thể đặt tên khác. như trên dòng code 4.
              <CardItem item={item} index={index}>

              </CardItem>
            );
          }}
          //FlatList phải có key. ở đây ta dùng trường ID làm key.
          keyExtractor={({XeID}, index) => XeID}
        >
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flatlist_container: {
    height: 80,
  },
  text: {
    fontSize: 16,
  }
});