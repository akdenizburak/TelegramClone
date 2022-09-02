import React from 'react';
import { View, StyleSheet, Image, Pressable, Text } from 'react-native';

const SettingsPage = ({ avatar = require("../assets/images/avatar/avatar.jpg") }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={avatar} />
            </View>
            <View style={styles.center}>
                <Pressable style={styles.buttonTheme}>
                    <Text style={styles.textTheme}>Theme</Text>
                </Pressable>
                <Pressable style={styles.buttonEdit}>
                    <Text style={styles.textEdit}>Edit Profile</Text>
                </Pressable>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.buttonLoguot}>
                    <Text style={styles.textLogout}>Log Out</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor:"#D6DBDF"
    },
    header: {
        width: "100%",
        height: "40%",
        justifyContent: "center"
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: "center",
        borderColor:"black",
        borderWidth:0.5
    },
    center: {
        width: "100%",
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonTheme: {
        width: "80%",
        height: 50,
        backgroundColor: "dodgerblue",
        borderRadius: 10,
        marginVertical: 10,
        justifyContent:"center",
        borderColor:"black",
        borderWidth:1
    },
    buttonEdit: {
        width: "80%",
        height: 50,
        backgroundColor: "pink",
        borderRadius: 10,
        marginVertical: 10,
        justifyContent:"center",
        borderColor:"black",
        borderWidth:1
    },
    textTheme:{
        fontSize:25,
        fontWeight:"bold",
        color:"black",
        alignSelf:"center",
    },
    textEdit:{
        fontSize:25,
        fontWeight:"bold",
        color:"black",
        alignSelf:"center",
    },
    footer: {
        width: "100%",
        height: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonLoguot: {
        width: "80%",
        height: 50,
        backgroundColor: "black",
        borderRadius: 10,
        marginVertical: 10,
        justifyContent:"center",
    },
    textLogout:{
        fontSize:25,
        fontWeight:"bold",
        color:"white",
        alignSelf:"center",
    },
})

export default SettingsPage;
