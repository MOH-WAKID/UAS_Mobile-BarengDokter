import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import AvatarImage from '../image/Icon.png'; 

const HomeScreen = () => {
    const [pencarian, setPencarian] = useState('');

    const getCategoryIcon = (label) => {
        switch (label) {
            case "Artikel":
                return "book-outline";
            case "Konsultasi":
                return "chatbubbles-outline";
            case "Obat":
                return "medkit-outline";
            case "Cari Dokter":
                return "search-outline";
            case "Klinik":
                return "medkit-outline";
            default:
                return "folder-open";
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f4f4f4" />
            <View style={styles.header}>
                <Text style={styles.subheading}>Hello</Text>
                <Text style={styles.heading}>Moh Wakid👋</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        value={pencarian}
                        onChangeText={text => setPencarian(text)}
                        placeholder='Cari informasi tentang kesehatan'
                        placeholderTextColor='#9e9e9e'
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={() => console.log('Mencari: ', pencarian)} style={styles.searchButton}>
                        <Icon name="search" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Jadwal Pemeriksaan</Text>
                    <Text style={styles.viewAll}>Lihat Semua</Text>
                </View>
                <TouchableOpacity style={styles.card}>
                    <Image source={AvatarImage} style={styles.avatar} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Dr. Supra</Text>
                        <Text style={styles.cardSubtitle}>Dokter THT</Text>
                        <View style={styles.cardDetails}>
                            <View style={styles.cardDetailRow}>
                                <Icon name="calendar" size={12} color="#FFFFFF" />
                                <Text style={styles.cardDetail}> 7 Juli 2024</Text>
                            </View>
                            <View style={styles.cardDetailRow}>
                                <Icon name="location" size={12} color="#FFFFFF" />
                                <Text style={styles.cardDetail}> Klinik THT Pamekasan</Text>
                            </View>
                        </View>
                    </View>
                    <Icon name="chevron-forward" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Kategori</Text>
                    <Text style={styles.viewAll}>Lihat Semua</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
                    {["Artikel", "Konsultasi", "Obat", "Cari Dokter", "Klinik"].map((label, index) => (
                        <CategoryCard key={index} label={label} icon={getCategoryIcon(label)} />
                    ))}
                </ScrollView>
            </ScrollView>
        </View>
    );
}

const CategoryCard = ({ label, icon }) => (
    <View style={styles.categoryCard}>
        <View style={styles.categoryIcon}>
            <Icon name={icon} size={24} color="#0082F7" />
        </View>
        <Text style={styles.categoryLabel}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    header: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
    },
    heading: {
        color: '#212121',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subheading: {
        color: '#757575',
        fontSize: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        elevation: 3,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 5,
        fontSize: 16,
        color: '#212121',
        marginRight: 10,
    },
    searchButton: {
        backgroundColor: '#0082F7',
        borderRadius: 9,
        padding: 11,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0082F7',
    },
    viewAll: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FDB436',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#0082F7',
        borderRadius: 10,
        marginVertical: 10,
        elevation: 3,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 15,
    },
    cardContent: {
        flex: 1,
        marginLeft: 15,
    },
    cardDetails: {
        marginTop: 10,
    },
    cardDetailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#FFFFFF',
        marginVertical: 2,
    },
    cardDetail: {
        fontSize: 12,
        color: '#FFFFFF',
    },
    categories: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    categoryCard: {
        alignItems: 'center',
        marginRight: 15,
    },
    categoryIcon: {
        width: 55,
        height: 55,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        elevation: 3,
    },
    categoryLabel: {
        fontSize: 12,
        textAlign: 'center',
        color: '#212121',
    },
});

export default HomeScreen;
