import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EventDetail = () => {
    const event = {
        nama: 'Workshop Perawatan Mata',
        tanggal: 'Senin, 8 Juli 2024',
        lokasi: 'Klinik Mata Sehat Pamekasan',
        deskripsi: 'Workshop ini akan membahas berbagai tips dan teknik perawatan mata sehari-hari. Peserta akan mendapatkan informasi tentang pentingnya menjaga kesehatan mata untuk kualitas hidup yang lebih baik.',
        pembicara: 'Dr. Jeffry, Sp.M',
        kontak: 'Daftar dan informasi lebih lanjut: workshop@klinikmatasehat.com',
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.judul}>{event.nama}</Text>

            <View style={styles.detailContainer}>
                <Text style={styles.detailLabel}>Tanggal:</Text>
                <Text style={styles.detailText}>{event.tanggal}</Text>
            </View>

            <View style={styles.detailContainer}>
                <Text style={styles.detailLabel}>Lokasi:</Text>
                <Text style={styles.detailText}>{event.lokasi}</Text>
            </View>

            <View style={styles.detailContainer}>
                <Text style={styles.detailLabel}>Deskripsi:</Text>
                <Text style={styles.detailText}>{event.deskripsi}</Text>
            </View>

            <View style={styles.detailContainer}>
                <Text style={styles.detailLabel}>Pembicara:</Text>
                <Text style={styles.detailText}>{event.pembicara}</Text>
            </View>

            <View style={styles.detailContainer}>
                <Text style={styles.detailLabel}>Kontak:</Text>
                <Text style={styles.detailText}>{event.kontak}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    judul: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    detailContainer: {
        marginBottom: 20,
    },
    detailLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detailText: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export default EventDetail;
