import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {getFocusedRouteNameFromRoute} from "@react-navigation/native"
import SplashScreen from './screens/SplashScreen';
import GettingStarted from './screens/GettingStarted';
import Login from './screens/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import whiteLogo from '../assets/whiteTextLogo.png';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import MyTickets from './screens/MyTickets';
import Menu from './screens/Menu';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import RegistrationForm from './screens/RegistrationForm';
import Account from './screens/Account';
import Rating from './screens/Rating';
import EditProfile from './screens/EditProfile';
import Maps from './screens/Maps';
import Aboutus from './screens/Aboutus';
import QRcode from './screens/QRcode';
import QRpage from './screens/QRpage';
import QRpayment from './screens/QRpayment';
import TransactionHistory from './screens/TransactionHistory';

// Screen names
const homeName = "Search";
const myTicketsName = "My Tickets";
const menuName = "Menu";
const ratingName = "Rating";
const accountName = "Account";
const editProfileName = "EditProfile";
const aboutus = "Aboutus";
const qrcode = "QRcode";
const qrpage = "QRpage";
const transhis = "TransactionHistory";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const getTabBarVisibility = (route)=>{
  const routeName = getFocusedRouteNameFromRoute(route);
  console.log(routeName)
  if(routeName?.includes('QRcode') || routeName?.includes('QRpage') || routeName?.includes('Account') || routeName?.includes('TransactionHistory') || routeName?.includes('Rating') || routeName?.includes('Aboutus') || routeName?.includes('EditProfile')){
    return 'none'
  }
  return 'flex'
}
function MainTabContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          ({route})=>({headerShown: false,})
          let iconName;

          if (route.name === homeName) {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === myTicketsName) {
            iconName = focused ? 'ticket' : 'ticket-outline';
          } else if (route.name === menuName) {
            iconName = focused ? 'grid' : 'grid-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false, // hide header
      })}
      tabBarOptions={{
        activeTintColor: '#2B436C',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 },
        tabBarActiveTintColor: "#2B436C",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: { 
          paddingBottom: 10, 
          fontSize: 10 
        },
        tabBarStyle: { 
          display: "flex" 
        }
      }}>

      <Tab.Screen name={homeName} component={HomeStackScreen} options={({route})=>({
        tabBarStyle:{display:getTabBarVisibility(route)}
      })} />
      <Tab.Screen name={myTicketsName} component={MyTicketsStackScreen} options={({route})=>({
        tabBarStyle:{display:getTabBarVisibility(route)}
      })} />
      <Tab.Screen name={menuName} component={MenuStackScreen} options={({route})=>({
        tabBarStyle:{display:getTabBarVisibility(route)}
      })} />
      
    </Tab.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={homeName}
        component={Home}
        options={{
          headerTitle: () => (
            <Image
              source={whiteLogo}
              style={{ width: 120, height: 40, tintColor: 'white' }} // Set the color of the logo
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2B436C', // Background color of the header bar
          },
          headerTintColor: 'white', // Color of the back button and header title
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: ()=> null,
        }}
      />
    </Stack.Navigator>
  );
}

function MyTicketsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={myTicketsName}
        
        component={MyTickets}
        options={{
          headerTitle: () => (
            <Image
              source={whiteLogo}
              style={{ width: 120, height: 40, tintColor: 'white' }} // Set the color of the logo
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2B436C', // Background color of the header bar
          },
          headerTintColor: 'white', // Color of the back button and header title
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: ()=> null,
        }}
      />
      <Stack.Screen
          name="QRcode"
          component={QRcode}
          options={{
          
          headerRight: () => (
            <Image
              source={whiteLogo}
              style={{ width: 70, height: 70, marginRight: 10, tintColor: 'white' }}
              resizeMode="contain"
            />
          ),
          headerLeft: ({ onPress }) => ( 
            <TouchableOpacity onPress={onPress} style={{ marginLeft: 20 }}>
              <Ionicons name="arrow-back" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>QR Code</Text>,
         headerStyle: {
                        backgroundColor: '#2B436C',
                        borderBottomWidth: 0,// Set zIndex high for overlapping with container0
                    },
      
        }}
        />
        <Stack.Screen
          name="QRpage"
          component={QRpage}
          options={{
            headerTitle: () => (
              <Image
                source={whiteLogo}
                style={{ width: 120, height: 40, tintColor: 'white' }}
                resizeMode="contain"
              />
            ),
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#2B436C',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Maps"
          component={Maps}
          options={{
          
          headerRight: () => (
            <Image
              source={whiteLogo}
              style={{ width: 70, height: 70, marginRight: 10, tintColor: 'white' }}
              resizeMode="contain"
            />
          ),
          headerLeft: ({ onPress }) => ( 
            <TouchableOpacity onPress={onPress} style={{ marginLeft: 20 }}>
              <Ionicons name="arrow-back" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Map</Text>,
         headerStyle: {
                        backgroundColor: '#2B436C',
                        borderBottomWidth: 0,// Set zIndex high for overlapping with container0
                    },
      
        }}
        />
    </Stack.Navigator>
  );
}


function MenuStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={menuName}
        component={Menu}
        options={{
          headerTitle: () => (
            <Image
              source={whiteLogo}
              style={{ width: 120, height: 40, tintColor: 'white' }} // Set the color of the logo
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2B436C',
            height: 200,
          },
          headerTintColor: 'white', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: ()=> null,
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          
          headerRight: () => (
            <Image
              source={whiteLogo}
              style={{ width: 70, height: 70, marginRight: 10, tintColor: 'white' }}
              resizeMode="contain"
            />
          ),
          headerLeft: ({ onPress }) => ( 
            <TouchableOpacity onPress={onPress} style={{ marginLeft: 20 }}>
              <Ionicons name="arrow-back" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>My Profile</Text>,
         headerStyle: {
                        backgroundColor: '#2B436C',
                        borderBottomWidth: 0,// Set zIndex high for overlapping with container0
                    },
      
        }}
      />
      <Stack.Screen
        name="Rating"
        component={Rating}
        options={{
          
          headerRight: () => (
            <Image
              source={whiteLogo}
              style={{ width: 70, height: 70, marginRight: 10, tintColor: 'white' }}
              resizeMode="contain"
            />
          ),
          headerLeft: ({ onPress }) => ( 
            <TouchableOpacity onPress={onPress} style={{ marginLeft: 20 }}>
              <Ionicons name="arrow-back" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Rate Us</Text>,
         headerStyle: {
                        backgroundColor: '#2B436C',
                        borderBottomWidth: 0,// Set zIndex high for overlapping with container0
                    },
      
        }}
      />
      <Stack.Screen
          name="Aboutus"
          component={Aboutus}
          options={{
          
          headerRight: () => (
            <Image
              source={whiteLogo}
              style={{ width: 70, height: 70, marginRight: 10, tintColor: 'white' }}
              resizeMode="contain"
            />
          ),
          headerLeft: ({ onPress }) => ( 
            <TouchableOpacity onPress={onPress} style={{ marginLeft: 20 }}>
              <Ionicons name="arrow-back" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>About Us</Text>,
         headerStyle: {
                        backgroundColor: '#2B436C',
                        borderBottomWidth: 0,// Set zIndex high for overlapping with container0
                    },
      
        }}
        />

        <Stack.Screen
          name="TransactionHistory"
          component={TransactionHistory}
          options={{
            tabBarStyle: {display: 'none'},
          headerRight: () => (
            <Image
              source={whiteLogo}
              style={{ width: 70, height: 70, marginRight: 10, tintColor: 'white' }}
              resizeMode="contain"
            />
          ),
          headerLeft: ({ onPress }) => ( 
            <TouchableOpacity onPress={onPress} style={{ marginLeft: 20 }}>
              <Ionicons name="arrow-back" size={20} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Transaction History</Text>,
         headerStyle: {
                        backgroundColor: '#2B436C',
                        borderBottomWidth: 0,// Set zIndex high for overlapping with container0
                    },
      
        }}
        />
    </Stack.Navigator>
  );
}


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="GettingStarted" component={GettingStarted} />
        <Stack.Screen name="MainContainer" component={MainTabContainer} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegistrationForm" component={RegistrationForm} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
        <Stack.Screen name="QRcode" component={QRcode} />
        <Stack.Screen name="QRpayment" component={QRpayment} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
