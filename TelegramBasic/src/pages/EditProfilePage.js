import React from 'react';
import { View, StyleSheet, TextInput ,Text, Pressable} from 'react-native';

const EditProfilePage = () => {
    return (
        <View style={styles.container}>
            {/* //input alanlar */}
            <Text style={styles.textTitle}>Edit Information</Text>
            <TextInput style={styles.text} key={"firstName"} placeholder="First Name"></TextInput>
            <TextInput style={styles.text} key={"lastName"} placeholder="Last Name"></TextInput>
            <TextInput style={styles.text} key={"username"} placeholder="username"></TextInput>
            {/* //kaydetmeyi sağlayan button */}
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>SAVE</Text>
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

export default EditProfilePage;
