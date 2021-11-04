import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItems";

export default function App() {
  //const [enterGoal, setenterGoal] = useState("");
  const [courseGoals, setcourseGoals] = useState<
    { key: string; value: string }[]
  >([]);
  const [isAddMode, setIsAddMode] = useState(false);
  /*
  function goalInputHandler(enteredText: string) {
    console.log(enteredText);
    setenterGoal(enteredText);
  }*/
  function addGoalsHandler(goaltitle: string) {
    setcourseGoals([
      ...courseGoals,
      { key: Math.random().toString(), value: goaltitle },
    ]);
    setIsAddMode(false);
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId: string) => {
    setcourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };
  return (
    <View style={{ padding: 70 }}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <GoalInput
          onCancel={cancelGoalAdditionHandler}
          isVisible={isAddMode}
          onAddGoal={addGoalsHandler}
        />
      </View>

      <FlatList
        data={courseGoals}
        keyExtractor={(itemData) => itemData.key}
        renderItem={(itemData) => (
          <GoalItem ondDelete={removeGoalHandler} item={itemData.item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
