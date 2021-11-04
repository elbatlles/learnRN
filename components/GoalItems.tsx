import React, { PureComponent } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
interface Props {
  item: {
    key: string;
    value: string;
  };
  ondDelete: Function;
}

const GoalItem = (props: Props) => {
  const { item, ondDelete } = props;
  return (
    <TouchableOpacity onPress={(e) => ondDelete(item.key)}>
      <View style={styles.listItems}>
        <Text>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default GoalItem;
