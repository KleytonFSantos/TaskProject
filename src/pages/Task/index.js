import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { database } from "../../config/firebaseconfig";
import { styles } from "./style";

export const Task = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    database.collection("Tasks").doc(id).delete();
  };

  useEffect(() => {
    database.collection("Tasks").onSnapshot((query) => {
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
        onPress={() => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
