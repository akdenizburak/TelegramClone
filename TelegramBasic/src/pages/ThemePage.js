import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

const ThemePage = () => {
    return (
        //sayfayı sarmallayan container
        <View style={styles.container}>
            {/* //koyu mod butonu */}
            <Pressable style={styles.buttonDark}>
                <Text style={styles.textDark}>Dark</Text>
            </Pressable>
            {/* //açık mod butonu */}
            <Pressable style={styles.buttonLight}>
                <Text style={styles.textLight}>Light</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "50%",
        flexDirection: "row",
        backgroundColor: "#D6DBDF",
        justifyContent: "space-around",
        alignItems: "center"
    },
    iconAdd: {
        alignSelf: "center",
        marginRight: 10
    },
    buttonDark: {
        width: "40%",
        height: "40%",
        backgroundColor: "black",
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: "center",
        borderColor: "yellow",
        borderWidth: 1
    },
    buttonLight: {
        width: "40%",
        height: "40%",
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 1
    },
    textDark: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        alignSelf: "center",
    },
    textLight: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        alignSelf: "center",
    },
})

export default ThemePage;
