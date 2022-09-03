import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, FlatList, Image, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import ContactMock from '../assets/ContactMock';


const ChatPage = ({ route, navigation }) => {
    const {  firstname, lastname, avatar } = route.params;
    return (
        //chat sayfasını sarmalayan View
        <View>
            {/* //chat sayfasının header bölümü */}
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()} >
                    <MaterialCommunityIcons style={styles.iconBack} name='chevron-left' size={35} color={"dodgerblue"} />
                </Pressable>
                <View>
                    <Image style={styles.image} source={avatar} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.textUserName}>{`${firstname} ${lastname}`}</Text>
                </View>
            </View>

            {/* //sohbet balonlarının bulunduğu, scrollview olan orta bölüm */}
            <FlatList
                style={styles.chat}
                data={ContactMock}
                renderItem={({ item }) => {<View style={styles.messageContainer}>
                    <Text style={styles.text}>{item.username}</Text>
                    <Text style={styles.time}>{item.lastname}</Text>
                </View>}}
            />

            {/* //mesaj gönderilen, textinput ve send butonun olduğu footer alanı */}
            <View style={styles.sendMessage}>
                <Entypo name='attachment' size={22} color={"gray"} />
                <TextInput multiline={true} style={styles.textInput} />
                <Pressable >
                    <MaterialCommunityIcons name='arrow-up-circle' size={35} color={"dodgerblue"} />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "8%",
        backgroundColor: "#f9f9f9",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "gray",
        borderBottomWidth: 0.3,
        minHeight: 55,
    },
    messageContainer: {
        maxWidth: "70%",
        width: "auto",
        height: "auto",
        marginLeft: 10,
        marginTop: 5,
        borderRadius: 13,
        borderColor: "gray",
        borderWidth: 0.3,
        backgroundColor: "white",
        flexDirection: "column",
        color: "black",
        textAlign: "center",
        padding: 7
    },
    text: {
        color: "black",
        fontSize: 15,
        fontWeight: "500",
        backgroundColor: "white",
        borderRadius: 15,
        textAlign: "left",
        flexWrap: "wrap",
        paddingRight: 10,
        paddingBottom: 10
    },
    time: {
        position: "absolute",
        width: 35,
        height: 14,
        textAlign: "center",
        alignSelf: "flex-end",
        bottom: 5,
        right: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 10
    },
    textUserName: {
        color: "black",
        fontWeight: "700",
        fontSize: 15,
    },
    container: {
        width: "45%",
    },
    chat: {
        width: "100%",
        height: "85%",
        backgroundColor: "#6ccd6d"
    }
    ,
    sendMessage: {
        width: "100%",
        maxHeight: "7%",
        height: "7%",
        backgroundColor: "#f9f9f9",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5,
        justifyContent: "space-evenly"
    },
    textInput: {
        width: "70%",
        height: "60%",
        backgroundColor: "white",
        borderWidth: 0.1,
        borderRadius: 30,
        padding: 5,
    },

})

export default ChatPage;