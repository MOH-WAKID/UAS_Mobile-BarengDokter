import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PesanScreen = () => {
    const [pesan, setPesan] = useState('');
    const [pesanList, setPesanList] = useState([
        { id: '1', text: 'Ada yang bisa saya bantu?' },
    ]);

    const kirimPesan = () => {
        if (pesan.trim() !== '') {
            setPesanList([...pesanList, { id: (pesanList.length + 1).toString(), text: pesan }]);
            setPesan('');
        }
    };

    const hapusPesan = (id) => {
        Alert.alert(
            'Hapus Pesan',
            'Anda yakin ingin menghapus pesan ini?',
            [
                {
                    text: 'Batal',
                    style: 'cancel',
                },
                {
                    text: 'Hapus',
                    style: 'destructive',
                    onPress: () => {
                        const updatedPesanList = pesanList.filter(item => item.id !== id);
                        setPesanList(updatedPesanList);
                    },
                },
            ],
            { cancelable: true }
        );
    };

    const renderItem = ({ item }) => (
        <View style={styles.pesanItem}>
            <Text style={styles.pesanText}>{item.text}</Text>
            <TouchableOpacity onPress={() => hapusPesan(item.id)} style={styles.deleteButton}>
                <Icon name="trash" size={24} color="red" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={pesanList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.pesanList}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    value={pesan}
                    onChangeText={text => setPesan(text)}
                    placeholder='Ketik pesan...'
                    placeholderTextColor='#9e9e9e'
                    style={styles.input}
                />
                <TouchableOpacity onPress={kirimPesan} style={styles.kirimButton}>
                    <Icon name="send" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    pesanList: {
        flex: 1,
        padding: 20,
    },
    pesanItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginVertical: 5,
    },
    pesanText: {
        flex: 1,
        fontSize: 16,
        color: '#212121',
    },
    deleteButton: {
        padding: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
    },
    input: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        fontSize: 16,
        color: '#212121',
        marginRight: 10,
    },
    kirimButton: {
        backgroundColor: '#0082F7',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PesanScreen;
