import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { app } from '../../config/firebaseconfig';
import { style } from "./style";

export const Details = ({ navigation, route }) =>{
    const [ descriptionEdit, setDescriptionEdit ] = useState(route.params.description)  
    const idTask = route.params.id
    const idUser = route.params.idUser
    const db = app.firestore();

    const editTask = (description, id, idUser) => {
      if(descriptionEdit)
      db.collection(`${idUser}`).doc(`${id}`).update({
            description: description,
        })
        navigation.navigate("Task", { idUser: route.params.idUser });
      }
  return (
    <>
      <View>
        <Text style={style.label}>Description</Text>
        <TextInput
          style={style.inputText}
          placeholder="Ex: estudar"
          onChangeText={setDescriptionEdit}
          value={descriptionEdit}
        />
      </View>
      <TouchableOpacity 
      style={style.buttonNewTask} 
      onPress={() => editTask(descriptionEdit, idTask, idUser)}>
        <Text style={style.textButton}>Save</Text>
      </TouchableOpacity>
    </>
    );
};