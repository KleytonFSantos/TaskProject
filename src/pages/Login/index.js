import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { styles } from "./style";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginFirebase = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("deu certo", user);
        navigation.navigate("Task", { idUser: user.uid });
        // ...
      })
      .catch((error) => {
        setError(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode", errorCode, errorMessage);
      });
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Task", { idUser: user.uid });
        const uid = user.uid;
        console.log(uid)
      } 
    });
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Task</Text>
      <TextInput
        style={styles.input}
        placeholder="digite seu email"
        value={email}
        type="text"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="********"
        value={password}
        type="text"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      {error && (
        <View style={styles.alertContent}>
          <MaterialCommunityIcons name="alert-circle" size={24} color="red" />
          <Text style={styles.warningAlert}>
            A senha ou o e-mail estão incorretos.
          </Text>
        </View>
      )}
      {email === "" || password === "" ? (
        <TouchableOpacity disabled={true} style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => loginFirebase(email, password)}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.registration}>
        Não tem uma conta?{" "}
        <Text
          style={styles.linkSubscribe}
          onPress={() => navigation.navigate("Register")}
        >
          {" "}
          Cadastre-se{" "}
        </Text>
      </Text>
      <View styles={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};
