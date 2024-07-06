import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', elevation: 3, paddingTop: 5, paddingBottom: 5 }}>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="home-outline" size={25} color="#0082F7" />
                    <Text style={{ color: '#000', marginTop: 5 }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="calendar-outline" size={25} color="#34354E" />
                    <Text style={{ color: '#000', marginTop: 5 }}>Jadwal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="chatbubble-outline" size={25} color="#34354E" /> 
                    <Text style={{ color: '#000', marginTop: 5 }}>Pesan</Text>    
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="person-outline" size={25} color="#34354E" />
                    <Text style={{ color: '#000', marginTop: 5 }}>User</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default App;
