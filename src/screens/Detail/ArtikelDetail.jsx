import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ArtikelDetail = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={[styles.title, { textAlign: 'center' }]}>Pengaruh Pola Hidup Sehat terhadap Kesehatan Jantung</Text>
            <Text style={[styles.author, { textAlign: 'right' }]}>Oleh: Dr. Faizal</Text>
            <Text style={[styles.date, { textAlign: 'right' }]}>Diterbitkan pada: 1 Juli 2024</Text>
            <Text style={styles.content}>
                Kesehatan jantung sangat dipengaruhi oleh pola hidup sehat. Mengkonsumsi makanan yang seimbang,
                rutin berolahraga, dan menghindari stres merupakan beberapa faktor penting dalam menjaga
                kesehatan jantung. Artikel ini akan membahas lebih lanjut mengenai cara-cara untuk
                menjaga jantung tetap sehat dan terhindar dari penyakit jantung.
            </Text>
            <Text style={styles.content}>
                1. Makan Makanan Sehat: Pilih makanan yang rendah lemak jenuh, kolesterol, dan garam. Konsumsi
                lebih banyak buah, sayuran, biji-bijian, dan protein tanpa lemak.
            </Text>
            <Text style={styles.content}>
                2. Rutin Berolahraga: Lakukan aktivitas fisik setidaknya 30 menit setiap hari. Olahraga dapat
                membantu menurunkan tekanan darah, meningkatkan kadar kolesterol baik, dan memperkuat jantung.
            </Text>
            <Text style={styles.content}>
                3. Hindari Stres: Stres dapat mempengaruhi kesehatan jantung secara negatif. Temukan cara untuk
                mengelola stres, seperti meditasi, yoga, atau hobi yang menyenangkan.
            </Text>
            <Text style={styles.content}>
                Dengan mengikuti tips-tips di atas, Anda dapat menjaga kesehatan jantung dan meningkatkan
                kualitas hidup. Selalu konsultasikan dengan dokter Anda untuk mendapatkan saran yang tepat
                sesuai kondisi kesehatan Anda.
            </Text>
        </ScrollView>
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
        marginBottom: 10,
    },
    author: {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 5,
    },
    date: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
        textAlign: 'justify',
    },
});

export default ArtikelDetail;
