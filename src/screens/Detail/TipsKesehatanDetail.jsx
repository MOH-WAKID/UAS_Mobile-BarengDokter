import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TipsKesehatan = () => {
    const tips = [
        {
            id: 1,
            judul: 'Rajin Berolahraga',
            deskripsi: 'Olahraga teratur membantu menjaga kesehatan jantung, meningkatkan kekuatan otot, dan memperbaiki mood.',
        },
        {
            id: 2,
            judul: 'Perbanyak Konsumsi Air Putih',
            deskripsi: 'Minum air putih cukup membantu menjaga tubuh tetap terhidrasi, mencegah dehidrasi, dan membantu fungsi organ-organ tubuh.',
        },
        {
            id: 3,
            judul: 'Makan Sehat',
            deskripsi: 'Pilihlah makanan yang seimbang nutrisinya, kaya akan serat, vitamin, dan mineral untuk mendukung kesehatan tubuh secara keseluruhan.',
        },
        {
            id: 4,
            judul: 'Cukup Istirahat',
            deskripsi: 'Tidur yang cukup dan berkualitas membantu tubuh memulihkan diri, meningkatkan sistem kekebalan tubuh, dan meningkatkan konsentrasi.',
        },
        {
            id: 5,
            judul: 'Hindari Stres Berlebihan',
            deskripsi: 'Stres berlebihan dapat berdampak negatif pada kesehatan mental dan fisik. Cari cara untuk mengelola stres seperti meditasi atau olahraga.',
        },
    ];

    return (
        <ScrollView style={styles.container}>
            {tips.map(tip => (
                <View key={tip.id} style={styles.tipContainer}>
                    <Text style={styles.tipJudul}>{tip.judul}</Text>
                    <Text style={styles.tipDeskripsi}>{tip.deskripsi}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tipContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tipJudul: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    tipDeskripsi: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export default TipsKesehatan;
