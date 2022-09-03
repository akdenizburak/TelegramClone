import React,{useContext} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { ThemeContext } from '../context/Theme';

const Contact = ({avatar,name,lastSeen}) => {
    const { theme } = useContext(ThemeContext);

    return (
            <View style={styles.contact}>
                <View style={styles.contactAvatar}>
                    <Image style={styles.avatar} source={avatar} />
                </View>
                <View style={styles.contactContent}>
                    <Text style={[styles.name,{color:theme.color}]}>{name}</Text>
                    <Text style={[styles.lastSeen,{color:theme.color}]}>{lastSeen}</Text>
                </View>
            </View>
    );
}

export default Contact;

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
        paddingVertical:5
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
    lastSeen: {
        width: "100%",
        height: "50%",
        color:"black",
        fontSize:14
    },
})

