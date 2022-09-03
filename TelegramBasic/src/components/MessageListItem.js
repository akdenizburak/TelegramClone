import React,{useContext} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from './../context/Theme';


//değerleri prop olarak alıyoruz
const MessageListItem = ({name,message,avatar}) => {
    const {theme}=useContext(ThemeContext);
    return (
            <View style={styles.contact}>
                <View style={styles.contactAvatar}>
                    <Image style={styles.avatar} source={avatar} />
                </View>
                <View style={styles.contactContent}>
                    <Text style={[styles.name,{color:theme.color}]}>{name}</Text>
                    <Text style={[styles.message,{color:theme.color}]}>{message}</Text>
                    <Icon style={styles.iconCheck} name="checkmark-done" size={20} color="#090" />
                </View>
            </View>
    );
}

const styles = StyleSheet.create({

    contact: {
        width: "100%",
        height: 50,
        flexDirection: "row",

    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginLeft: 10,
        textAlign: "left",
    },
    contactContent: {
        width:"80%",
        flexDirection: "column",
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
        paddingVertical:5,
    },
    contactAvatar:{
        width:"20%",
        paddingVertical:5
    },
    name: {
        width: "100%",
        height:"50%",
        color: "black",
        fontSize: 16,
        fontWeight:"bold"
    },
    message: {
        width: "100%",
        height: "50%",
        color:"black",
        fontSize:14,
        padding:3
    },
    iconCheck:{
        width:20,
        height:20,
        alignSelf:"flex-end",
        marginTop:28,
        marginRight:10,
    }
})

export default MessageListItem;