import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

const UserScreen = () => {
    const [username, setUsername] = useState('Moh Wakid');
    const [email, setEmail] = useState('mohwakid45@gmail.com');
    const [phone, setPhone] = useState('+6285233006040');
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        setIsEditing(false);
        Alert.alert('Informasi Tersimpan', 'Profil pengguna telah berhasil disimpan.');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../image/Icon8.png')} style={styles.profileImage} />
            <Text style={styles.heading}>Profil Pengguna</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Nama:</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername}
                    />
                ) : (
                    <Text style={styles.value}>{username}</Text>
                )}
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Email:</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                ) : (
                    <Text style={styles.value}>{email}</Text>
                )}
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Telepon:</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />
                ) : (
                    <Text style={styles.value}>{phone}</Text>
                )}
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={isEditing ? handleSave : () => setIsEditing(true)}
            >
                <Text style={styles.buttonText}>{isEditing ? 'Simpan' : 'Edit'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#212121',
    },
    infoContainer: {
        width: '100%',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 3,
    },
    label: {
        fontSize: 14,
        color: '#757575',
    },
    value: {
        fontSize: 17,
        color: '#212121',
    },
    input: {
        fontSize: 17,
        color: '#212121',
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    button: {
        width: '100%',
        backgroundColor: '#0082F7',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default UserScreen;
