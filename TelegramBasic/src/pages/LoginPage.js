import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";

export default function App() {
    const [selectedValue, setSelectedValue] = useState("tr");
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 250 }}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Turkey +90" value="tr" />
                <Picker.Item label="France +33" value="fr" />
                <Picker.Item label="USA +1" value="us" />
                <Picker.Item label="Denmark +45" value="dk" />
            </Picker>
            <TextInput style={styles.text} placeholder="Phone Number" keyboardType="number-pad"></TextInput>
            <TextInput style={styles.text} key={"firstName"} placeholder="First Name"></TextInput>
            <TextInput style={styles.text} key={"lastName"} placeholder="Last Name"></TextInput>
            <TextInput style={styles.text} key={"username"} placeholder="username"></TextInput>
            <Pressable style={styles.button}>
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
    buttonText:{
        width:"100%",
        height:"100%",
        fontSize:20,
        fontWeight:"normal",
        color:"white",
        textAlign:"center",
        textAlignVertical:"center"

    }
});