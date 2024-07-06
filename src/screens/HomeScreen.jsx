import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, StyleSheet } from 'react-native';

const HomeScreen = () => {
    const [pencarian, setPencarian] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <StatusBar barStyle="dark-content" backgroundColor="#f4f4f4" />
                <Text style={styles.heading}>Hello</Text>
                <Text style={styles.subheading}>Moh Wakid👋</Text>
                <TextInput
                    value={pencarian}
                    onChangeText={text => setPencarian(text)}
                    placeholder='Cari informasi tentang kesehatan / dokter'
                    placeholderTextColor='#9e9e9e'
                    style={styles.input}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    content: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 10,
    },
    heading: {
        color: '#212121',
        fontSize: 24,
        fontWeight: 'bold',
    },
    subheading: {
        color: '#212121',
        fontSize: 18,
    },
    input: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 5,
        fontSize: 16,
        color: '#212121',
    },
});

export default HomeScreen;
