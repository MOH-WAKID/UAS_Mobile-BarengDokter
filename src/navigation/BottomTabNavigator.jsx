import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import JadwalScreen from '../screens/JadwalScreen';
import PesanScreen from '../screens/PesanScreen';
import UserScreen from '../screens/UserScreen';
import ArtikelDetail from '../screens/Detail/ArtikelDetail';
import KonsultasiDetail from '../screens/Detail/KonsultasiDetail'; 
import ObatDetail from '../screens/Detail/ObatDetail'; 
import CariDokterDetail from '../screens/Detail/CariDokterDetail';
import KlinikDetail from '../screens/Detail/KlinikDetail';
import BeritaDetail from '../screens/Detail/BeritaDetail';
import EventDetail from '../screens/Detail/EventDetail';
import TipsKesehatanDetail from '../screens/Detail/TipsKesehatanDetail';
import ForumDetail from '../screens/Detail/ForumDetail';
import PerawatanDetail from '../screens/Detail/PerawatanDetail';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Beranda" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-outline" color={color} size={size} />
                    ),
                    headerShown: false,
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
                name="Pengguna" 
                component={UserScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-outline" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="ArtikelDetail" 
                component={ArtikelDetail} 
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen 
                name="KonsultasiDetail" 
                component={KonsultasiDetail} 
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen 
                name="ObatDetail" 
                component={ObatDetail} 
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen 
                name="CariDokterDetail" 
                component={CariDokterDetail} 
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen 
                name="KlinikDetail" 
                component={KlinikDetail} 
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen 
                name="BeritaDetail" 
                component={BeritaDetail} 
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen 
                name="EventDetail" 
                component={EventDetail} 
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen 
                name="TipsKesehatanDetail" 
                component={TipsKesehatanDetail} 
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen 
                name="ForumDetail" 
                component={ForumDetail} 
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen 
                name="PerawatanDetail" 
                component={PerawatanDetail} 
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
