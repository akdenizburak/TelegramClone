import React, { useContext } from 'react';
import { View, StyleSheet, Text, TextInput, FlatList, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Contact from '../components/Contact';
import { ThemeContext } from '../context/Theme';
import ContactMock from '../assets/ContactMock';

const ContactPage = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);

    return (
        //en dıştaki container
        <View style={[styles.container, {
            backgroundColor: theme.backgroundColor,
        },
        ]}>
            {/* //sayfanın header bölümü */}
            <View style={styles.header}>
                {/* //headerın üst kısmı */}
                <View style={styles.headerTop}>
                    <Text style={styles.textSort}>Sort</Text>
                    <Text style={[styles.textContact, {
                        color: theme.color,
                    }]}>Contact</Text>
                    <MaterialCommunityIcons style={styles.iconAdd} name='plus' size={25} color={"dodgerblue"} />
                </View>
                {/* //headerın alt kısmı */}
                <View style={styles.headerBottom}>
                    <TextInput style={styles.search} placeholder='Search'></TextInput>
                </View>
            </View>

            {/* //sohbet balonlarının bulunduğu, scrollview olan orta bölüm */}
            <FlatList
                style={styles.content}
                data={ContactMock}
                renderItem={({ item }) => <Pressable onPress={() => navigation.navigate('ChatPage', {
                id: item.id,
                firstname: item.firstname,
                lastname: item.lastname,
                avatar: item.avatar,
            })}><Contact name={`${item.firstname} ${item.lastname}`} lastSeen={item.username} avatar={item.avatar} /></Pressable>}/>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection: "column"
    },
    header: {
        width: "100%",
        height: "15%",
        flexDirection: "column",
        backgroundColor: "F2F2F2",
        borderBottomColor: "gray",
        borderBottomWidth: 0.2
    },
    headerTop: {
        width: "100%",
        height: "50%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
    },
    headerBottom: {
        width: "100%",
        height: "40%",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
    },
    textSort: {
        color: "dodgerblue",
        fontSize: 18,
        alignSelf: "center",
        marginLeft: 10
    },
    textContact: {
        color: "black",
        fontSize: 19,
        fontWeight: "700",
        alignSelf: "center"
    },
    iconAdd: {
        alignSelf: "center",
        marginRight: 10
    },
    search: {
        width: "90%",
        marginRight: 10,
        backgroundColor: "#eeeeee",
        padding: 1,
        textAlign: "center",
        borderColor: "lightgray",
        borderWidth: 0.3,
        borderRadius: 7,
        fontSize: 17,
    },
    content: {
        width: "100%",
        height: "50%",
    }
})

export default ContactPage;
