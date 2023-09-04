import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
   const [email, SetEmail] = useState('');
   const [password, SetPassword] = useState('');

   const HandleLogin = () => {
        console.log(`login com email: ${email} e senha: ${password}`);
   };
};