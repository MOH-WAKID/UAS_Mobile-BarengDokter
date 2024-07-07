import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import KlinikImage1 from '../image/Icon.png'; 
import KlinikImage2 from '../image/Icon1.png'; 
import KlinikImage3 from '../image/Icon2.png';
import KlinikImage4 from '../image/Icon3.png';
import KlinikImage5 from '../image/Icon4.png';
import KlinikImage6 from '../image/Icon5.png';
import KlinikImage7 from '../image/Icon6.png';
import KlinikImage8 from '../image/Icon7.png';

const JadwalScreen = () => {
    const jadwalPemeriksaan = [
        {
            namaDokter: 'Dr. Supra',
            spesialisasi: 'Dokter Spesialis THT',
            tanggal: '7 Juli 2024',
            lokasi: 'Klinik Pamekasan',
            gambar: KlinikImage1, 
        },
        {
            namaDokter: 'Dr. Jefrry',
            spesialisasi: 'Dokter Spesialis Mata',
            tanggal: '8 Juli 2024',
            lokasi: 'Klinik Pamekasan',
            gambar: KlinikImage2, 
        },
        {
            namaDokter: 'Dr. Dian',
            spesialisasi: 'Dokter Spesialis Saraf',
            tanggal: '9 Juli 2024',
            lokasi: 'Klinik Pamekasan',
            gambar: KlinikImage3, 
        },
        {
            namaDokter: 'Dr. Angga',
            spesialisasi: 'Dokter Spesialis Bedah',
            tanggal: '10 Juli 2024',
            lokasi: 'Klinik Pamekasan',
            gambar: KlinikImage4, 
        },
        {
            namaDokter: 'Dr. Faizal',
            spesialisasi: 'Dokter Spesialis Jantung',
            tanggal: '11 Juli 2024',
            lokasi: 'Klinik Pamekasan',
            gambar: KlinikImage5, 
        },
        {
            namaDokter: 'Dr. Garata',
            spesialisasi: 'Dokter Spesialis Anak',
            tanggal: '12 Juli 2024',
            lokasi: 'Klinik Pamekasan',
            gambar: KlinikImage6, 
        },
        {
            namaDokter: 'Dr. Linda',
            spesialisasi: 'Dokter Spesialis Kandungan',
            tanggal: '13 Juli 2024',
            lokasi: 'Klinik Pamekasan',
            gambar: KlinikImage7, 
        },
        {
            namaDokter: 'Dr. Syarif',
            spesialisasi: 'Dokter Spesisalis Paru-Paru',
            tanggal: '14 Juli 2024',
            lokasi: 'Klinik Pamekasan',
            gambar: KlinikImage8, 
        },
        
    ];

    return (
        <ScrollView style={styles.container}>
            {jadwalPemeriksaan.map((item, index) => (
                <View key={index} style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image source={item.gambar} style={styles.klinikImage} />
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.cardTitle}>{item.namaDokter}</Text>
                        <Text style={styles.cardSubtitle}>{item.spesialisasi}</Text>
                        <View style={styles.cardDetails}>
                            <View style={styles.cardDetailRow}>
                                <Icon name="calendar" size={14} color="#FFFFFF" />
                                <Text style={styles.cardDetail}>{item.tanggal}</Text>
                            </View>
                            <View style={styles.cardDetailRow}>
                                <Icon name="location" size={14} color="#FFFFFF" />
                                <Text style={styles.cardDetail}>{item.lokasi}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#0082F7',
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3,
    },
    imageContainer: {
        padding: 20,
    },
    klinikImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 15,
    },
    contentContainer: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 5,
    },
    cardDetails: {
        marginTop: 10,
    },
    cardDetailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    cardDetail: {
        fontSize: 12,
        color: '#FFFFFF',
        marginLeft: 5,
    },
});

export default JadwalScreen;
