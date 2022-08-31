import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <Text style={styles.textSort}>Sort</Text>
                    <Text style={styles.textContact}>Contact</Text>
                    <MaterialCommunityIcons style={styles.iconAdd} name='plus' size={25} color={"dodgerblue"} />
                </View>
                <View style={styles.headerBottom}>
                    <TextInput style={styles.search} placeholder='Search'></TextInput>
                </View>
            </View>
            <View style={styles.content}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    header: {
        flex: 1,
        flexDirection: "column",
        backgroundColor:"F2F2F2"
    },
    headerTop: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-between",
        alignContent:"center",
    },
    headerBottom: {
        flex: 1,
        flexDirection: "row",
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center"
    },
    textSort:{
        color:"dodgerblue",
        fontSize:18,
        alignSelf:"center",
        marginLeft:10
    },
    textContact:{
        color:"black",
        fontSize:19,
        fontWeight:"700",
        alignSelf:"center"
    },
    iconAdd:{
        alignSelf:"center",
        marginRight:10
    },
    search:{
        width:"90%",
        marginRight:10,
        backgroundColor:"#eeeeee",
        padding:1,
        textAlign:"center",
        borderColor:"lightgray",
        borderWidth:0.3,
        borderRadius:7,
        fontSize:17,
    },
    content: {
        flex: 5,
        backgroundColor: "blue"
    }
})

export default ContactPage;
