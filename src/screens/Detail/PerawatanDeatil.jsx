import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ArtikelDetail = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detail Artikel</Text>
            <Text style={styles.content}>Isi detail artikel di sini...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    content: {
        fontSize: 16,
    },
});

export default ArtikelDetail;
