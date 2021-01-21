import React from 'react';
import {View, Image, ImageBackground, StyleSheet} from 'react-native';

var logo = require('./splash.jpg');
var bg = require('./background.jpg');

function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.push('Home');
  }, 3000);

  return (
    <View style={styles.container}>
      <ImageBackground style={{height: '100%', width: '100%'}} source={bg}>
        <View style={styles.logo1}>
          <Image style={{height: '90%', width: '90%'}} source={logo} />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  logo1: {
    width: '100%',
    height: '100%',
    marginLeft: 20,
    marginTop: 30,
  },
  containetr: {
    flex: 1,
    alignItems: 'center',
  },
});
export default SplashScreen;
