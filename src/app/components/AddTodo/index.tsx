import * as React from "react";
import { Text, View } from "react-native";

const AddTodo: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>タスクを作成する画面</Text>
    </View>
  );
};

export default AddTodo;
