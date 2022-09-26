import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { app } from "../../config/firebaseconfig";
import { styles } from "./style";


export const Task = ({ navigation, route }) => {
  const [tasks, setTasks] = useState([]);
  const db = app.firestore()
  const deleteTask = (id) => {
    db.collection(route.params.idUser).doc(id).delete();
  };

  useEffect(() => {
    db.collection(route.params.idUser).onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTasks(list);
    });
  }, [setTasks]);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item }) => {
          return (
            <View style={styles.tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(item.id);
                }}
              >
                <FontAwesome
                  name="star"
                  size={23}
                  color="#f92e6a"
                ></FontAwesome>
              </TouchableOpacity>
              <Text
                style={styles.descriptionTask}
                onPress={() => {
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                  });
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTasks}
        onPress={() => navigation.navigate("New Task", { idUser: route.params.idUser })}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
