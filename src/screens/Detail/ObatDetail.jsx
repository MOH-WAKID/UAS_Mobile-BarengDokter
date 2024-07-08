import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ObatDetail = () => {
    const obat = {
        nama: '1. Paracetamol',
        deskripsi: 'Obat ini digunakan untuk meredakan demam dan mengurangi rasa sakit ringan hingga sedang (seperti sakit kepala, nyeri otot, nyeri gigi, dan nyeri setelah operasi atau cedera).',
        indikasi: 'Demam, sakit kepala, nyeri otot, nyeri gigi, nyeri pasca operasi atau cedera.',
        dosis: 'Dosis umum dewasa: 500 mg - 1000 mg setiap 4-6 jam, maksimal 4000 mg per hari.',
        efekSamping: 'Efek samping yang umum termasuk mual, muntah, atau reaksi alergi ringan. Langka terjadi efek samping serius seperti ruam kulit, pembengkakan wajah/lidah/tenggorokan, pusing berat, atau kesulitan bernapas.',
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.judul}>{obat.nama}</Text>

            <View style={styles.detailContainer}>
                <Text style={styles.detailLabel}>Deskripsi:</Text>
                <Text style={styles.detailText}>{obat.deskripsi}</Text>
            </View>

            <View style={styles.detailContainer}>
                <Text style={styles.detailLabel}>Indikasi:</Text>
                <Text style={styles.detailText}>{obat.indikasi}</Text>
            </View>

            <View style={styles.detailContainer}>
                <Text style={styles.detailLabel}>Dosis:</Text>
                <Text style={styles.detailText}>{obat.dosis}</Text>
            </View>

            <View style={styles.detailContainer}>
                <Text style={styles.detailLabel}>Efek Samping:</Text>
                <Text style={styles.detailText}>{obat.efekSamping}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    judul: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginTop: 20,
        textAlign: 'center',
    },
    detailContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
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

export default ObatDetail;
