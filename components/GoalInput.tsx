import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

interface Props {
  onAddGoal: Function;
  onCancel: Function;
  isVisible: boolean;
}

const GoalInput = (props: Props) => {
  const [enterGoal, setenterGoal] = useState("");

  const { onCancel, onAddGoal, isVisible } = props;
  function hanndelChangeGoal(text: string) {
    setenterGoal(text);
  }
  const addGoalHanderl = (text: string) => {
    onAddGoal(text);
  };
  return (
    <Modal visible={isVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="22"
          onChangeText={(e) => hanndelChangeGoal(e)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={(e) => onCancel()} title="Cancel" color="red">
              Cancel
            </Button>
          </View>
          <View style={styles.button}>
            <Button onPress={(e) => addGoalHanderl(enterGoal)} title="Add">
              Add
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

/*
import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const GoalInput = () => {
  const [enterGoal, setenterGoal] = useState("");
  const [courseGoals, setcourseGoals] = useState<
    { key: string; value: string }[]
  >([]);
  function addGoalsHandler() {
    setcourseGoals([
      ...courseGoals,
      { key: Math.random().toString(), value: enterGoal },
    ]);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="22"
        onChangeText={(e) => goalInputHandler(e)}
        style={{
          padding: 10,
          borderBottomColor: "black",
          borderWidth: 1,
          width: "80%",
        }}
      />

      <Button onPress={addGoalsHandler} title="Add">
        Add
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default GoalInput;

*/
