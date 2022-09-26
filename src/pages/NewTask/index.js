import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { app } from "../../config/firebaseconfig";
import { style } from "./style";
import 'firebase/compat/firestore';

export const NewTask = ({ navigation, route }) => {
  const [description, setDescription] = useState(null);
  const [error, setError] = useState(false);
  const db = app.firestore()

  const addTask = () => {
    if(!description) {
      return setError(true);
    } else {
      db.collection(route.params.idUser).add({
        description: description,
        status: false,
      });
      navigation.navigate("Task",{ idUser: route.params.idUser });
    }
    
  };

  return (
    <>
      <View>
        <Text style={style.label}>Description</Text>
        <TextInput
          style={style.inputText}
          placeholder="Ex: estudar"
          onChangeText={setDescription}
          value={description}
        />
        {
        error &&
        <Text 
        style={style.label}
        >
          Descreva alguma task para adicionar.
        </Text>
        }
      </View>
      <TouchableOpacity style={style.buttonNewTask} onPress={() => addTask()}>
        <Text style={style.textButton}>Save</Text>
      </TouchableOpacity>
    </>
  );
};
