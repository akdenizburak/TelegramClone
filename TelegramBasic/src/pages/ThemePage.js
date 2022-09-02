import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ThemePage = () => {
    return (
        //sayfayı sarmallayan container
        <View style={styles.container}>
            {/* //koyu mod butonu */}
            <View style={styles.containerTop}>
                <Pressable style={styles.buttonDark}>
                    <Text style={styles.textDark}>Dark</Text>
                    <Icon name="moon" size={50} color="#000" />
                </Pressable>
            </View>
            <View style={styles.containerBottom}>
                {/* //açık mod butonu */}
                <Pressable style={styles.buttonLight}>
                    <Text style={styles.textLight}>Light</Text>
                    <Icon name="sunny" size={50} color="#fff" />
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
        justifyContent: "space-around",
        alignItems: "center"
    },
    containerTop: {
        width: "100%",
        height: "50%",
        flexDirection: "row",
        backgroundColor: "#000",
        justifyContent: "space-around",
        alignItems: "center"
    },
    containerBottom: {
        width: "100%",
        height: "50%",
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-around",
        alignItems: "center"
    },
    buttonDark: {
        width: "40%",
        height: "40%",
        backgroundColor: "white",
        borderRadius: 30,
        marginVertical: 10,
        alignItems:"center",
        justifyContent: "space-around",
        borderColor: "yellow",
        borderWidth: 1
    },
    buttonLight: {
        width: "40%",
        height: "40%",
        backgroundColor: "black",
        borderRadius: 30,
        marginVertical: 10,
        alignItems:"center",
        justifyContent: "space-around",
        borderColor: "black",
        borderWidth: 1
    },
    textDark: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        alignSelf: "center",
    },
    textLight: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        alignSelf: "center",
    },
})

export default ThemePage;
