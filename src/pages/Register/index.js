import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { style } from "./style";

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const registerFirebase = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode", errorCode, errorMessage);

        // ..
      });
  };

  useEffect(() => {}, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.container}
    >
      <Text style={style.title}>Task</Text>
      <TextInput
        style={style.input}
        placeholder="Digite seu email"
        value={email}
        type="text"
        onChangeText={setEmail}
      />
      <TextInput
        style={style.input}
        placeholder="Digite uma senha"
        value={password}
        type="text"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <TextInput
        style={style.input}
        placeholder="Confirme sua senha"
        value={confirmPassword}
        type="text"
        secureTextEntry={true}
        onChangeText={setConfirmPassword}
      />
      {confirmPassword && confirmPassword !== password ? (
        <View style={style.alertContent}>
          <MaterialCommunityIcons name="alert-circle" size={24} color="red" />
          <Text style={style.warningAlert}>
            A confirmação de senha não está correta.
          </Text>
        </View>
      ) : (
        ""
      )}
      {email === "" || password === "" || password !== confirmPassword ? (
        <TouchableOpacity disabled={true} style={style.buttonRegister}>
          <Text style={style.textButtonRegister}>Cadastrar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={style.buttonRegister}
          onPress={() => {
            registerFirebase(email, password);
          }}
        >
          <Text style={style.textButtonRegister}>Cadastrar</Text>
        </TouchableOpacity>
      )}
      <Text style={style.registration}>
        Não tem uma conta?{" "}
        <Text
          style={style.linkSubscribe}
          onPress={() => navigation.navigate("Login")}
        >
          {" "}
          Entrar{" "}
        </Text>
      </Text>
      <View styles={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};
