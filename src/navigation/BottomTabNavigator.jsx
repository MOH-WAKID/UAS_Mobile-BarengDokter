import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import JadwalScreen from '../screens/JadwalScreen';
import PesanScreen from '../screens/PesanScreen';
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Jadwal" 
                component={JadwalScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calendar-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Pesan" 
                component={PesanScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="chatbubble-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="User" 
                component={UserScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
