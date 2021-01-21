import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Profile() {
  //   let data = route.params;
  return (
    <View style={styles.Detail}>
      <Text>Welcome Users!! !!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Detail: {
    flex: 1,
    fontSize: 35,
    textAlign: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'lightgreen',
  },
});
export default Profile;
