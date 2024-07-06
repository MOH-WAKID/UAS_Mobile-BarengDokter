import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    const [pencarian, setPencarian] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f4f4f4" />
            <View style={styles.header}>
                <Text style={styles.heading}>Selamat Datang</Text>
                <Text style={styles.subheading}>Moh Wakid👋</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        value={pencarian}
                        onChangeText={text => setPencarian(text)}
                        placeholder='Cari informasi tentang kesehatan / dokter'
                        placeholderTextColor='#9e9e9e'
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={() => console.log('Mencari: ', pencarian)} style={styles.searchButton}>
                        <Icon name="search" size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

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
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
});

export default HomeScreen;
