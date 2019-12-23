import React from 'react';
import { Text, View } from 'react-native';
//const popAction = StackActions.pop({
  //n: 1,
//});
//make a Component
const Header = (props) => {
  const { headerStyle, bgHeader } = styles;

  return (
    <View style = {bgHeader}>
      <Text style = { headerStyle }>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  bgHeader: {
    justifyContent:'center',
    alignItems:'center',
    elevation: 10,
    height: 45,
    shadowColor: '#00000',
    shadowOffset:{width: 0, height:10},
    shadowOpacity: 0.2,
    position: 'relative',
    flexDirection:'row',
  },
  headerStyle: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
};

module.exports = Header;
export default Header;