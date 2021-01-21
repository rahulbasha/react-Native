import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Image} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FeedScreen from './pages/Feed';
import ProfileScreen from './pages/ProfileScreen';
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import SplashScreen from './SplashScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
//const bg = require('./background.jpg');
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function NavigationDrawerStructure({title, isHome, navigation}) {
  //const navigationProps = useNavigation();
  //Structure for the navigatin Drawer
  //const toggleDrawer = ({route}) => {
  //   //Props to open/close the drawer`
  //props.navigationProps.toggleDrawer();
  //};
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate.AppDrawer()}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
}

// function getHeaderTitle(route) {
//   const routeName = getFocusedRouteNameFromRoute(route) ? 'Home' : 'Home';

//   switch (routeName) {
//     case 'HomeScreen':
//       return 'Home';
//     case 'FeedScreen':
//       return 'Feed';
//     case 'SettingsScreen':
//       return 'settings';
//   }
// }

function HomeStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerStyle: {backgroundColor: 'grey'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          headerLeft: () => (
            <NavigationDrawerStructure isHome={true} navigation={navigation} />
          ),
          headerShown: true,
        })}
      />
      <Stack.Screen name="Feed" component={FeedScreen} />
    </Stack.Navigator>
  );
}

function SettingsStack({navigation}) {
  return (
    <Stack.Navigator
      //initialRouteName="TabNav"
      screenOptions={{
        openByDefault: 'true',
        headerLeft: () => <NavigationDrawerStructure navigation={navigation} />,
        headerStyle: {backgroundColor: 'grey'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="TabNav" component={AppDrawer} />
    </Stack.Navigator>
  );
}

function AppDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" independent={true}>
        <Drawer.Screen
          name="Setting"
          component={SettingsStack}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                color={color}
                size={size}
                name={focused ? 'grid' : 'grid'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home'}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        tabBarOptions={{
          activeTintColor: 'orange',
          openByDefault: 'true',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            labelStyle: {
              textAlign: 'center',
            },
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home'}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name={focused ? 'star' : 'star'}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'profile',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="grid" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
