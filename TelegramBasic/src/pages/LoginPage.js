import React from 'react';
import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import CountryCodes from './../assets/CountryCodes';

const LoginPage = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("tr");
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Your Phone Number and Information</Text>
            {/* //numara seçici */}
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 250 }}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                {/* //dizideki ülkelerin tamamını dönen metot */}
                {CountryCodes.map((event, index) => {
                    return (
                        <Picker.Item key={index} label={`${event.dial_code} ${event.name}`} value={event.code} />
                    )
                })}
            </Picker>
            {/* //input alanlar */}
            <TextInput style={styles.text} placeholder="Phone Number" keyboardType="number-pad"></TextInput>
            <TextInput style={styles.text} key={"firstName"} placeholder="First Name"></TextInput>
            <TextInput style={styles.text} key={"lastName"} placeholder="Last Name"></TextInput>
            <TextInput style={styles.text} key={"username"} placeholder="username"></TextInput>
            {/* //sayfa geçisini sağlayan button */}
            <Pressable style={styles.button} onPress={()=>{navigation.navigate('ContactPage')}}>
                <Text style={styles.buttonText}>SIGN UP</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
    textTitle:{
        width: "60%",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:50,
        color:"black",
    },
    text: {
        width: "60%",
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    button: {
        width: "60%",
        height: "8%",
        backgroundColor: "#54a8e5",
        marginTop: 50,
        borderRadius: 2,
    },
    buttonText: {
        width: "100%",
        height: "100%",
        fontSize: 20,
        fontWeight: "normal",
        color: "white",
        textAlign: "center",
        textAlignVertical: "center"
    }
})

export default LoginPage;
