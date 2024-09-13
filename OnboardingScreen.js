import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "./assets/icon.png";

export default function OnboardingScreen() {
    return (
        <View style = {style.container} >
            <View>
                <Text> Welcome </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width:  100,
        height: 100,
        resizeMode: "cover",
    }
})