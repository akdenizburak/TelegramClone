import React from 'react';
import { View, StyleSheet, Image, Pressable, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsPage = ({navigation, avatar = require("../assets/images/avatar/avatar.jpg"),username="akdenizburak",phone="+90 506 969 05 07" }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={avatar} />
                <Text style={styles.textUserName}>{username}</Text>
                <Text style={styles.textPhone}>{phone}</Text>
            </View>
            <View style={styles.center}>
                <Pressable onPress={()=>{navigation.navigate("Theme")}} style={styles.buttonTheme}>
                    <Text style={styles.textTheme}>Theme</Text>
                    <MaterialCommunityIcons style={styles.iconCheck} name="theme-light-dark" size={40} color="#000" />
                </Pressable>
                <Pressable onPress={()=>{navigation.navigate("EditProfile")}} style={styles.buttonEdit}>
                    <Text style={styles.textEdit}>Edit Profile</Text>
                </Pressable>
            </View>
            <View style={styles.footer}>
                <Pressable onPress={()=>{navigation.navigate("Login")}} style={styles.buttonLoguot}>
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
        backgroundColor:"white"
    },
    header: {
        width: "100%",
        height: "40%",
        justifyContent: "center",
        borderBottomColor:"black",
        borderBottomWidth:0.3,
        backgroundColor:"#000"
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: "center",
        borderColor:"black",
        borderWidth:0.5
    },
    textUserName:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        fontStyle:"italic",
        marginVertical:10,
        textAlign:"center"
    },
    textPhone:{
        fontSize:20,
        color:"white",
        fontStyle:"italic",
        textAlign:"center"
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
        borderWidth:1,
        flexDirection:"row",
        alignItems:"center"
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
        margin:10
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
