import { StatusBar } from "expo-status-bar";
//import { StyleSheet,Text, View } from "react-native";
import React from "react";

import { SafeAreaView, StyleSheet } from "react-native";
import TelaLogin from './TelaLogin'
const App = () => {
    return (
        <SafeAreaView>
            <TelaLogin></TelaLogin>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
        container: {
            flex: 1,
        }
});

export default App;